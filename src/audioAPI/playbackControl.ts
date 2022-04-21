import { Howl } from "howler"
import { ref } from "vue"

export interface ISound {
  audio: Howl,
  sprites: string[]
  plan: {
    interval: number,
    random: boolean
    delay?: number
  }
  loop: boolean
}

class Sound implements ISound{
  audio: Howl
  sprites: string[]
  plan: { interval: number; random: boolean; delay?: number | undefined }
  loop: boolean
  constructor(obj: ISound){
    this.audio = obj.audio
    this.sprites = obj.sprites
    this.plan = obj.plan
    this.loop = obj.loop
  }
  get volume(){
    this.volumeReactive.value = this.audio.volume()
    return this.audio.volume()
  }
  set volume(value: number){
    this.audio.volume(value)
    this.volumeReactive.value = value
  }
  volumeReactive = ref(0.5)
}

export class PlaybackControl {
  sounds: Record<string, Sound>
  private timeouts: number[] = []


  constructor(sounds: Record<string, ISound>) {
    const obj: Record<string, Sound> = {}
    Object.keys(sounds).forEach(el => obj[el] = new Sound(sounds[el]))
    this.sounds = obj
  }

  load(andPlay = false): void {
    for (const prop in this.sounds) {
      const audio = this.sounds[prop].audio
      audio.load()
      if(andPlay) audio.on('load', () => {
        this.play(this.sounds[prop])
      })
    }
  }
  
  isLoaded(): boolean {
    return Object.values(this.sounds).every((item) => item.audio.state() === 'loaded' )
  }

  start(): void {
    if(!this.isLoaded()) return this.load(true)
    for (const prop in this.sounds) {
      const sound = this.sounds[prop]
      // if (sound.plan.interval) this.interval(sound, sound.plan.interval)
      // sound.audio.load()
      if(!sound.plan.delay) this.play(sound)
      else this.timeout(sound, sound.plan.delay)
      
      sound.audio.on('end', () => {
        console.log('end', Object.keys(this.sounds).length, sound)
        if(sound.loop) return
        if (sound.plan.interval) this.timeout(sound, sound.plan.interval)
        else this.play(sound)
      })
    }
  }

  private timeout(sound: ISound, time: number) {
    const timeout = setTimeout(() => {
      this.play(sound)
    }, time)
    this.timeouts.push(timeout)
  }

  private play(sound: ISound) {
    let sprite: undefined | string = undefined
    if (sound.sprites.length) {
      if (sound.plan.random) sprite = sound.sprites[Math.floor(Math.random() * sound.sprites.length)]
      else sprite = sound.sprites[0]
    }
    sound.audio.play(sprite)
  }

  playing(): boolean {
    for (const prop in this.sounds) {
      const sound = this.sounds[prop]
      if (sound.audio.playing()) return true
    }
    return false
  }

  stop(): void {
    this.timeouts.forEach(int => {
      clearTimeout(int)

      console.log('stopping', this.timeouts, int)
    })
    this.timeouts.length = 0
    for (const prop in this.sounds) {
      const sound = this.sounds[prop]
      sound.audio.off('end')
      sound.audio.off('load')
      if (sound.audio.playing()) sound.audio.stop()
    }
  }
}
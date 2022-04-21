import { Howl } from "howler"
import { ISound, PlaybackControl } from "./playbackControl"

interface HowlPrototype  {
  src: string[]
  volume: number
  preload?: boolean
  loop?: boolean
  // xhr?: Record<string, any>
  sprite: Record<string, [number, number]>
  plan: {
    interval: number,
    random: boolean,
    delay?: number
  }
}

export class SoundsManager {
  controller!: PlaybackControl
  constructor(sounds: Record<string, HowlPrototype>) {
    this.init(sounds)
  }

  private init(sounds: Record<string, HowlPrototype>) {
    const obj: Record<string, ISound> = {}
    Object.keys(sounds).forEach(el => {
      obj[el] = {
        audio: new Howl({...sounds[el], preload: false}),
        sprites: Object.keys(sounds[el].sprite),
        plan: sounds[el].plan,
        loop: sounds[el].loop || false
      }
    })
    this.controller = new PlaybackControl(obj)
  }

  setVolume(value: number): void {
    //this.sounds.volume(value)
  }

  playing(): boolean {
    return this.controller.playing()
  }


  start(): void {
    if (this.playing()) return
    this.controller.start()
    //this.sounds.play()
  }

  pause(): void {
    ///this.sounds.pause()
  }

  stop(): void {
    this.controller.stop()
  }
}
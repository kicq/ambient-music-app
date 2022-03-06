import { Howl, Howler } from 'howler'
import { starwars, sciFy } from '../../assets/sounds'


const sound2 = new Howl({
  src: [starwars],
  volume: 0.2,
  sprite: {
    start: [0, 11200],
    prelude: [11400, 69000],
    center: [80000, 55000],
  }
})

const Interface = new Howl({
  src: [sciFy.Interface],
  volume: 0.1,
  sprite: { track1: [2000, 4000], track2: [0, 4000], track3: [0, 1000] },
  //loop: true,
})

const Interface2 = new Howl({
  src: [sciFy.Interface2],
  volume: 0.1,
  sprite: { track1: [2000, 4000], track2: [0, 4000], track3: [0, 1000] },
  //loop: true,
})

const Planetary = new Howl({
  src: [sciFy.Planetary],
  volume: 0.5,
  loop: true,
})

const cargo2 = new Howl({
  src: [sciFy.Cargo2],
  volume: 0.1,
  loop: true,
})

// Play the sound.
const manager = Howler as unknown as HowlerGlobal

const click = () => {
  if (sound2.playing() || Interface.playing() || Interface2.playing() || Interface2.playing() || Planetary.playing()) return manager.stop()


  sound2.play('start')
  sound2.on('end', () => {
    const sprites = ['start', 'prelude', 'center']
    sound2.play(randomSprite(sprites))
    
  })
  // Interface.play('track3')
  // Interface.fade(0.1, 0, 5000)
  // Interface.on('end', () => {
  //   setTimeout(() => {
  //     Interface.play(randomSprite(['track1', 'track2', 'track3', 'track3', 'track3']))
  //     Interface.fade(0.1, 0, 4000)
  //   }, 9000)

  // })

  Interface2.play('track3')
  Interface2.fade(0.1, 0, 5000)
  Interface2.on('end', () => {
    setTimeout(() => {
      Interface2.play(randomSprite(['track1', 'track2', 'track3', 'track3', 'track3']))
      Interface2.fade(0.1, 0, 4000)
    }, 6000)

  })
  Planetary.play()
  cargo2.play()

}
export { click }

const randomSprite = (spriteNameList: string[]) => {
  return spriteNameList[Math.floor(Math.random() * spriteNameList.length)]
}

// Change global volume.
//Howler.volume(0.5)
//console.log(sound.playing())


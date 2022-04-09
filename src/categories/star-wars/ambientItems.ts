import { starwars } from "@/assets/sounds"
import { Howl } from "howler"



export const SpaceshipHangar = {
  title: 'Spaceship Hangar',
  description: 'Lorem ipsum dollar Lorem Lorem ipsum dollar Lorem ipsum dollar',
  img: 'https://cdna.artstation.com/p/assets/images/images/036/404/840/large/mike-ming-yin-imperial-hangar-01.jpg',
  soundManager: {

  }
}

class SoundsManager {
  sounds: Record<string, Howl> = {
    music: new Howl({
      src: [starwars],
      volume: 0.2,
      sprite: {
        start: [0, 11200],
        prelude: [11400, 69000],
        center: [80000, 55000],
      },
    })
  }
}
import { nature, sciFy, melody } from "@/assets/sounds"
import { SoundsManager } from "@/audioAPI"
import { Howl } from "howler"


export const SpaceshipHangar = {
  title: 'Spaceship Hangar',
  description: `Space hangar is fully expanded and now completely enclosed. Figure shows on the inset, portion of original hangar remaining. Fan supported 16.2m - long tunnel`,
  img: 'https://cdna.artstation.com/p/assets/images/images/036/404/840/large/mike-ming-yin-imperial-hangar-01.jpg',
  soundManager: new SoundsManager({
    music: {
      src: [melody.starwars],
      volume: 0.2,
      sprite: {
        start: [0, 11200],
        prelude: [11400, 69000],
        center: [80000, 55000],
      },
      plan: {
        interval: 3000,
        random: true
      }
    },
    planetary: {
      src: [sciFy.Planetary],
      volume: 0.3,
      sprite: {
        start: [0, 152000],
      },
      plan: {
        interval: 0,
        random: true
      }
    },
    cargo: {
      src: [sciFy.Cargo2],
      volume: 0.2,
      sprite: {},
      loop: true,
      plan: {
        interval: 0,
        random: true
      }
    },
    doors: {
      src: [sciFy.Doors],
      volume: 0.05,
      sprite: {
        open: [0, 2500],
        close: [3000, 5000],
        ladderClose: [6500, 8500],
        ladderOpen: [15000, 7500],
      },
      plan: {
        interval: 15000,
        random: true,
        delay: 3000
      }
    },
    SpaceShipFlight: {
      src: [sciFy.SpaceShipFlight],
      volume: 0.2,
      sprite: {
        var1: [0, 13000],
        var2: [14000, 13000],
      },
      plan: {
        interval: 19000,
        random: true,
        delay: 9000,
      }
    }
  })
}
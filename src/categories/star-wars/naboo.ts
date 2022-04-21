import { melody, nature, people, sciFy } from "@/assets/sounds"
import { SoundsManager } from "@/audioAPI"

export const Naboo = {
  title: 'Naboo, Theed',
  description: `Theed was the capital city of the Naboo, a society of humans who lived on the planet of the same name.`,
  img: 'https://cdn.wallpapersafari.com/55/59/7qeBiz.png',
  soundManager: new SoundsManager({
    music: {
      src: [melody.starwarsWeGoTogether],
      volume: 0.2,
      sprite: {
        // start: [0, 11200],
        // prelude: [11400, 69000],
        // center: [80000, 55000],
      },
      loop: true,
      plan: {
        interval: 3000,
        random: true
      }
    },
    wind: {
      src: [nature.forestWind],
      volume: 0.1,
      sprite: {
        // start: [0, 152000],
      },
      loop: true,
      plan: {
        interval: 0,
        random: true
      }
    },
    crickets: {
      src: [nature.crickets],
      volume: 0.5,
      sprite: {
        // start: [0, 152000],
      },
      loop: true,
      plan: {
        interval: 0,
        random: true
      }
    },
    Waterfall: {
      src: [nature.Waterfall],
      volume: 0.1,
      sprite: {
         start: [3000, 35000],
      },
      plan: {
        interval: 0,
        random: true
      }
    },
    SpaceShipFlight: {
      src: [sciFy.SpaceShipFlight],
      volume: 0.05,
      sprite: {
        var1: [0, 13000],
        var2: [14000, 13000],
      },
      plan: {
        interval: 30000,
        random: true,
        delay: 23000,
      }
    }
  })
}
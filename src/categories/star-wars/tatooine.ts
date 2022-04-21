import { melody, nature, people, sciFy } from "@/assets/sounds"
import { SoundsManager } from "@/audioAPI"

export const Tatooine = {
  title: 'Tatooine, Mos Eisley',
  description: `Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories.`,
  img: 'https://cdn.wallpapersafari.com/62/28/bmnlRs.jpg',
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
    desert: {
      src: [nature.DesertWind],
      volume: 0.2,
      sprite: {
        // start: [0, 152000],
      },
      loop: true,
      plan: {
        interval: 0,
        random: true
      }
    },
    marketplace: {
      src: [people.MarketPlace],
      volume: 0.2,
      sprite: {
        // start: [0, 152000],
      },
      loop: true,
      plan: {
        interval: 0,
        random: true
      }
    },
    SpaceShipFlight: {
      src: [sciFy.SpaceShipFlight],
      volume: 0.1,
      sprite: {
        var1: [0, 13000],
        var2: [14000, 13000],
      },
      plan: {
        interval: 22000,
        random: true,
        delay: 12000,
      }
    }
  })
}
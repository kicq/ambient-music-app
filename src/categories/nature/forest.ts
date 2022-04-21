import { nature, sciFy } from "@/assets/sounds"
import { SoundsManager } from "@/audioAPI"
import { Howl } from "howler"
// import { SoundsManager } from "../star-wars/ambientItems"

export const Forest = {
  title: 'Wild Forest',
  description: 'Lorem ipsum dollar Lorem Lorem ipsum dollar Lorem ipsum dollar',
  img: 'https://images.unsplash.com/photo-1562569517-22bcc82b5dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  soundManager: new SoundsManager({
    wind: {
      src: [nature.forestWind],
      volume: 0.2,
      sprite: { },
      loop: true,
      plan: {
        interval: 1000,
        random: true
      }
    },
    forest: {
      src: [nature.forest],
      volume: 0.3,
      loop: true,
      sprite: { },
      plan: {
        interval: 0,
        random: true
      }
    },
    cuckoo: {
      src: [nature.cuckoo],
      volume: 0.3,
      sprite: {name: [0, 3000]},
      plan: {
        interval: 4000,
        random: true
      }
    }
  })
}

export const NightForest = {
  title: 'Night Forest',
  description: 'The Forest in night, Crickets, wind and other sounds',
  img: 'https://cdn.wallpapersafari.com/83/31/UZNAIO.jpg',
  soundManager: new SoundsManager({
    wind: {
      src: [nature.forestWind],
      volume: 0.1,
      sprite: {},
      loop: true,
      plan: {
        interval: 1000,
        random: true
      }
    },
    crickets: {
      src: [nature.crickets],
      volume: 0.6,
      loop: true,
      sprite: {},
      plan: {
        interval: 0,
        random: true
      }
    }
  })
}
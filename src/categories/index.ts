import { SoundsManager } from '@/audioAPI'
import { Nature } from './nature'
import { StarWars } from './star-wars'

export const categories = [ StarWars, Nature ]

export interface ICategory {
  name: string
  img: string
  ambientCards: IAmbienceItem[]
}
export interface IAmbienceItem {
  title: string
  description: string
  img: string
  soundManager: SoundsManager // temporary
}
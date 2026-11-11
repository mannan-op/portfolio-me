import abeeraShot from '@/assets/work/abeera.webp'
import tasbeehaShot from '@/assets/work/tasbeeha.webp'

export interface ProjectShot {
  src: string
  alt: string
  width: number
  height: number
  position: string
}

export const projectShots: Record<string, ProjectShot> = {
  'Abeeras Collection': {
    src: abeeraShot,
    alt: 'Coming soon page for Abeera Collection, with the shop name and Lahore',
    width: 1440,
    height: 900,
    position: 'center',
  },
  'Tasbeeha Collections': {
    src: tasbeehaShot,
    alt: 'Homepage of the Tasbeeha Collections shop, showing the summer collection',
    width: 1440,
    height: 900,
    position: 'top',
  },
}

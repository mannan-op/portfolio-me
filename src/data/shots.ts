import abeeraShot from '@/assets/work/abeera.webp'
import autostitchShot from '@/assets/work/autostitch.webp'
import constructionShot from '@/assets/work/construction-hub.webp'
import hisabShot from '@/assets/work/hisab.webp'
import n8nShot from '@/assets/work/n8n.webp'
import tasbeehaShot from '@/assets/work/tasbeeha.webp'

export interface ProjectShot {
  src: string
  alt: string
  width: number
  height: number
  position: string
  /** plain = the image already includes its own frame, so skip the browser chrome */
  chrome?: 'browser' | 'plain'
}

export const projectShots: Record<string, ProjectShot> = {
  'AutoStitch AI': {
    src: autostitchShot,
    alt: 'Concept view of an AutoStitch shop with sample clothing and a stylist chat',
    width: 1600,
    height: 1000,
    position: 'center top',
  },
  'Construction Hub': {
    src: constructionShot,
    alt: 'Concept view of a Construction Hub desktop screen listing sample job sites',
    width: 1600,
    height: 1000,
    position: 'center top',
    chrome: 'plain',
  },
  'n8n video automation': {
    src: n8nShot,
    alt: 'Concept view of an n8n-style workflow for a short-form video pipeline',
    width: 1600,
    height: 1000,
    position: 'center top',
  },
  'Hisab AI': {
    src: hisabShot,
    alt: 'Concept view of a WhatsApp-style chat logging sample expenses',
    width: 1600,
    height: 1000,
    position: 'center',
    chrome: 'plain',
  },
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

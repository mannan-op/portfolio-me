import abeeraShot from '@/assets/work/abeera.webp'
import abeeraAvif from '@/assets/work/abeera.avif'
import abeeraSmall from '@/assets/work/abeera-800.webp'
import abeeraSmallAvif from '@/assets/work/abeera-800.avif'
import autostitchShot from '@/assets/work/autostitch.webp'
import autostitchAvif from '@/assets/work/autostitch.avif'
import autostitchSmall from '@/assets/work/autostitch-800.webp'
import autostitchSmallAvif from '@/assets/work/autostitch-800.avif'
import constructionShot from '@/assets/work/construction-hub.webp'
import constructionAvif from '@/assets/work/construction-hub.avif'
import constructionSmall from '@/assets/work/construction-hub-800.webp'
import constructionSmallAvif from '@/assets/work/construction-hub-800.avif'
import hisabShot from '@/assets/work/hisab.webp'
import hisabAvif from '@/assets/work/hisab.avif'
import hisabSmall from '@/assets/work/hisab-800.webp'
import hisabSmallAvif from '@/assets/work/hisab-800.avif'
import n8nShot from '@/assets/work/n8n.webp'
import n8nAvif from '@/assets/work/n8n.avif'
import n8nSmall from '@/assets/work/n8n-800.webp'
import n8nSmallAvif from '@/assets/work/n8n-800.avif'
import tasbeehaShot from '@/assets/work/tasbeeha.webp'
import tasbeehaAvif from '@/assets/work/tasbeeha.avif'
import tasbeehaSmall from '@/assets/work/tasbeeha-800.webp'
import tasbeehaSmallAvif from '@/assets/work/tasbeeha-800.avif'

export interface ProjectShot {
  src: string
  avif: string
  small: string
  smallAvif: string
  smallWidth: number
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
    avif: autostitchAvif,
    small: autostitchSmall,
    smallAvif: autostitchSmallAvif,
    smallWidth: 800,
    alt: 'Auto Stitch homepage, with the Eid collection banner and the shop navigation',
    width: 1440,
    height: 900,
    position: 'center top',
  },
  'Construction Hub': {
    src: constructionShot,
    avif: constructionAvif,
    small: constructionSmall,
    smallAvif: constructionSmallAvif,
    smallWidth: 800,
    alt: 'Concept view of a Construction Hub desktop screen listing sample job sites',
    width: 1600,
    height: 1000,
    position: 'center top',
    chrome: 'plain',
  },
  'n8n video automation': {
    src: n8nShot,
    avif: n8nAvif,
    small: n8nSmall,
    smallAvif: n8nSmallAvif,
    smallWidth: 800,
    alt: 'Concept view of an n8n-style workflow for a short-form video pipeline',
    width: 1600,
    height: 1000,
    position: 'center top',
  },
  'Hisab AI': {
    src: hisabShot,
    avif: hisabAvif,
    small: hisabSmall,
    smallAvif: hisabSmallAvif,
    smallWidth: 800,
    alt: 'Concept view of a WhatsApp-style chat logging sample expenses',
    width: 1600,
    height: 1000,
    position: 'center',
    chrome: 'plain',
  },
  'Abeera Collection': {
    src: abeeraShot,
    avif: abeeraAvif,
    small: abeeraSmall,
    smallAvif: abeeraSmallAvif,
    smallWidth: 800,
    alt: 'Abeera homepage: Eid collection hero for a Lahore womenswear shop',
    width: 1440,
    height: 900,
    position: 'center top',
  },
  'Tasbeeha Collections': {
    src: tasbeehaShot,
    avif: tasbeehaAvif,
    small: tasbeehaSmall,
    smallAvif: tasbeehaSmallAvif,
    smallWidth: 800,
    alt: 'Homepage of the Tasbeeha Collections shop, showing the summer collection',
    width: 1440,
    height: 900,
    position: 'top',
  },
}

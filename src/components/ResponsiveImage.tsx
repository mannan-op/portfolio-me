import type { CSSProperties } from 'react'

export function ResponsiveImage({
  alt,
  width,
  height,
  webp,
  avif,
  webpSmall,
  avifSmall,
  smallWidth,
  sizes,
  className,
  style,
  loading = 'lazy',
  fetchPriority,
}: {
  alt: string
  width: number
  height: number
  webp: string
  avif: string
  webpSmall?: string
  avifSmall?: string
  smallWidth?: number
  sizes: string
  className?: string
  style?: CSSProperties
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}) {
  const avifSrcSet =
    avifSmall && smallWidth ? `${avifSmall} ${smallWidth}w, ${avif} ${width}w` : avif
  const webpSrcSet =
    webpSmall && smallWidth ? `${webpSmall} ${smallWidth}w, ${webp} ${width}w` : webp

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={webp}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
        style={style}
      />
    </picture>
  )
}

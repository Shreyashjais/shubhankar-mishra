import Image from "next/image";

/**
 * Fill-parent image. The parent must be `relative` and have a size / aspect ratio.
 * SVG placeholders skip the optimizer; real JPG/WebP/PNG go through next/image
 * (AVIF/WebP, responsive srcset, lazy loading).
 */
export default function Media({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={src.endsWith(".svg")}
      className={`object-cover ${className}`}
    />
  );
}

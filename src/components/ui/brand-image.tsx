import Image from 'next/image';
import { getAsset } from '@/data/assets';
import { sitePath } from '@/lib/site-path';
export function BrandImage({
  id,
  className = '',
  sizes = '(max-width: 700px) 100vw, 50vw',
  priority = false,
}: {
  id: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const asset = getAsset(id);
  if (!asset) return <div className="image-unavailable">Product image being prepared</div>;
  return (
    <Image
      src={sitePath(asset.src)}
      alt={asset.alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}

import { useState } from 'react';
import { Trees } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sunset Gardens and Lagoon Gweru',
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#133A2E] via-[#1C4D3D] to-[#285E4B] p-6 text-center text-white ${className}`}
      >
        <Trees className="mb-3 h-8 w-8 text-[#F59E0B]" aria-hidden="true" />
        <p className="font-display text-lg font-medium tracking-tight">{fallbackTitle}</p>
        <p className="mt-1 text-xs text-white/75">8 Mt Pleasant Rd, Harben Park, Gweru</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

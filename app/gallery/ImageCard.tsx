import React from 'react';
import Image, { ImageProps } from 'next/image';

const ImageCard = ({ src, alt, width, height }: ImageProps) => {
  return (
    <li className="max-h-fit max-w-sm">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="skeleton rounded-lg object-contain"
      />
    </li>
  );
};

export default ImageCard;

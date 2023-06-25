import React from 'react';
import Image, { ImageProps } from 'next/image';

const ImageCard = ({ src, alt, width, height }: ImageProps) => {
  return (
    <li>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10"
      />
    </li>
  );
};

export default ImageCard;

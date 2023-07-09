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
        className="skeleton overflow-hidden rounded-lg"
      />
    </li>
  );
};

export default ImageCard;

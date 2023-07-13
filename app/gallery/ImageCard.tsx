import React from 'react';
import Image, { ImageProps } from 'next/image';

const ImageCard = ({ src, alt, width, height }: ImageProps) => {
  return (
    <li className="aspect-video flex-[24rem] overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="skeleton object-contain"
      />
    </li>
  );
};

export default ImageCard;

import React from 'react';
import Image from 'next/image';
type ImageCardProps = {
  src: string;
  alt: string;
};
const ImageCard = ({ src, alt }: ImageCardProps) => {
  return (
    // ! add src
    <Image
      src={'/convocation.png'}
      alt={alt}
      width={400}
      height={225}
      className="overflow-hidden rounded-md"
    />
  );
};

export default ImageCard;

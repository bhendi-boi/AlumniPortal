import Image from 'next/image';

type Props = {
  src: string;
  altText: string;
  width: number;
  height: number;
};

const ImageCard = ({ src, altText, height, width }: Props) => {
  return (
    <figure className="mb-8">
      <Image
        className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10"
        src={src}
        alt={altText}
        width={width}
        height={height}
      />
      <figcaption className="mt-1 text-center text-sm text-secondary-text">
        {altText}
      </figcaption>
    </figure>
  );
};

export default ImageCard;

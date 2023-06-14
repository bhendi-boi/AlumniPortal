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
      <Image src={src} alt={altText} width={width} height={height} />
      <figcaption className="mt-1 text-center text-sm text-secondary-text">
        {altText}
      </figcaption>
    </figure>
  );
};

export default ImageCard;

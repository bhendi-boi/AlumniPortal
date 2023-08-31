import Link from 'next/link';

const Header = ({
  title,
  link = undefined,
}: {
  title: string;
  link?: string;
}) => {
  return (
    <header className="my-8 max-w-5xl md:mx-auto">
      {link ? (
        <Link title={`Go to ${title}`} href={link}>
          <h1 className="inline text-left font-lato text-4xl">{title}</h1>
        </Link>
      ) : (
        <h1 className="text-left font-lato text-4xl">{title}</h1>
      )}
    </header>
  );
};

export default Header;

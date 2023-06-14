import Link from 'next/link';

const Header = ({
  title,
  link = null,
}: {
  title: string;
  link?: string | null;
}) => {
  return (
    <header className="my-8 max-w-5xl md:mx-auto">
      {link ? (
        <Link href={link}>
          <h1 className="text-left text-4xl">{title}</h1>
        </Link>
      ) : (
        <h1 className="text-left text-4xl">{title}</h1>
      )}
    </header>
  );
};

export default Header;

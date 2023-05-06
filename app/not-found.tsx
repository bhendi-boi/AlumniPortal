import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid min-h-[80svh] place-items-center">
      <div>
        <h1 className="mb-4 text-5xl font-bold">Error 404</h1>
        <p className="mb-1">Could not find requested resource.</p>
        <p>
          Go back to home by clicking{' '}
          <Link
            href="/"
            className="cursor-pointer text-blue-600 hover:underline active:underline"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

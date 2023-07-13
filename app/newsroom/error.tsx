'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="my-4 text-3xl font-medium text-red-600">
        Error: {error.message}
      </h2>

      <Link
        href="/services/newsroom"
        className="rounded-md bg-contact-blue px-6 py-3 font-medium text-white hover:opacity-90 active:opacity-80"
      >
        Back to Newsroom
      </Link>
    </div>
  );
}

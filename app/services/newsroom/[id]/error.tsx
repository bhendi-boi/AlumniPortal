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
      <h2>{error.message}</h2>
      <p>
        Go back to newsroom by clicking{' '}
        <Link
          href="/services/newsroom"
          className="cursor-pointer text-blue-600 hover:underline active:underline"
        >
          here
        </Link>
        .
      </p>
    </div>
  );
}

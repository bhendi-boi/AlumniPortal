'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="mb-4 text-5xl font-bold text-red-600">Error 404</h2>
      <div className="my-4">
        <p className="mb-1">
          You are trying to search for event <strong>{id}</strong> , which
          doesn't exist.
        </p>
        <p>Try changing the URL or go back to events</p>
      </div>
      <Link
        href="/events"
        className="px-6 py-3 font-medium text-white rounded-md bg-contact-blue hover:opacity-90 active:opacity-80"
      >
        Back to Events
      </Link>
    </div>
  );
}

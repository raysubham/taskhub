"use client";
import Link from "next/link";
// Error components must be Client Components

export default function Error({
  error
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
}

"use client";

// Shows the current year. The Footer wraps this in <Suspense>, so Next.js
// pre-builds the rest of the page and fills the year in for each visitor.
export default function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}

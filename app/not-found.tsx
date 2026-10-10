import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-bone">
      <p className="font-cond text-[28vw] font-extrabold leading-none text-outline">404</p>
      <h1 className="mt-4 font-display text-4xl italic md:text-6xl">This page isn&apos;t part of the conversation.</h1>
      <Link href="/" className="mt-10 rounded-full bg-red px-8 py-4 font-semibold transition-colors hover:bg-bone hover:text-ink">
        Back to home
      </Link>
    </main>
  );
}

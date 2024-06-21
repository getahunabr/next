import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js App!</h1>
      <Link href="/blog">Blog</Link>
    </div>
  );
}

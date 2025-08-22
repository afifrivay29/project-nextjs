import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Hello, Blog Next.js!</h1>
      <p>List of posts</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Next.js</Link>
        </li>
        <li>
          <Link href="/blog/belajar-route-nextjs">Belajar Route Next.js</Link>
        </li>
      </ul>
    </>
  );
}

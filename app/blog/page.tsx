import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Hello, Blog Next.js!</h1>
      <p>List of posts</p>
      <ul>
        <li>
          <Link className="underline" href="/blog/belajar-nextjs">
            Belajar Next.js
          </Link>
        </li>
        <li>
          <Link className="underline" href="/blog/belajar-route-nextjs">
            Belajar Route Next.js
          </Link>
        </li>
      </ul>
    </>
  );
}

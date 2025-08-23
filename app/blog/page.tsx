import Link from "next/link";
import Heading from "../../components/Heading";

export default function BlogPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>
      <p className="mx-auto px-4">List of posts</p>
      <ul className="mx-auto pl-10">
        <li className="list-disc">
          <Link
            className="underline text-gray-700 hover:text-blue-600"
            href="/blog/belajar-nextjs"
          >
            Belajar Next.js
          </Link>
        </li>
        <li className="list-disc">
          <Link
            className="underline text-gray-700 hover:text-blue-600"
            href="/blog/belajar-route-nextjs"
          >
            Belajar Route Next.js
          </Link>
        </li>
      </ul>
    </>
  );
}

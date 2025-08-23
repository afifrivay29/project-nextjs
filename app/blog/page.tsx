import Heading from "../../components/Heading";
import PostCards from "../../components/PostCards";

export default function BlogPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>
      <p className="mx-auto px-4">List of posts</p>
      {/* <ul className="mx-auto pl-10">
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
      </ul> */}
      <PostCards
        image="images/image (1).jpg"
        href="/blog/belajar-nextjs"
        alt="Belajar Next.js"
        titlePost="Belajar Next.js"
        date="23 Agustus 2025"
        author="Jane Doe"
        description="Panduan lengkap memulai dengan Next.js untuk membangun aplikasi web modern."
      />
      <PostCards
        image="images/image (2).jpeg"
        href="/blog/belajar-route-nextjs"
        alt="Belajar Route Next.js"
        titlePost="Belajar Route Next.js"
        date="21 Agustus 2025"
        author="Afif Rivay"
        description="Panduan lengkap memulai Belajar Route dengan Next.js untuk membangun aplikasi web modern."
      />
    </>
  );
}

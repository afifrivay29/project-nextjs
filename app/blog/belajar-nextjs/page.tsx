// app/blogs/belajar-nextjs/page.jsx (Next.js 13+ with App Router)

import { marked } from "marked";
import Heading from "../../../components/Heading";
import { readFile } from "node:fs/promises";
import matter from "gray-matter";

export default async function BelajarNextjsPage() {
  const text = await readFile("./content/blogs/belajar-nextjs.md", "utf-8");

  const {
    content,
    data: { title, image, date, author, slug },
  } = matter(text);

  const html = marked(content);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>
      <img src={image} alt={slug} className="mb-2 rounded-2xl" />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-lg prose lg:prose-sm prose-slate"
      ></article>
    </>
  );
}

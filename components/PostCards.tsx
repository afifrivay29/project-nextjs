import React from "react";
import Link from "next/link";

type PostCardsProps = {
  image: string;
  href: string;
  alt: string;
  titlePost: string;
  date: string;
  author: string;
  description: string;
};

export default function PostCards({
  image,
  href,
  alt,
  titlePost,
  date,
  author,
  description,
}: PostCardsProps) {
  return (
    <div className="max-w-3xl mx-4 my-4 bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <Link
        href={href}
        className="md:w-1/2 w-full group relative overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
        />
      </Link>

      {/* Text Section */}
      <div className="md:w-1/2 w-full px-6 py-2 flex flex-col justify-start">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
          <Link href={href}>{titlePost}</Link>
        </h2>
        <p className="text-sm text-gray-500">Published: {date}</p>
        <p className="text-sm text-gray-500 mb-4">By: {author}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

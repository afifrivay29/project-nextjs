import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="#">MyLogo</a>
          </div>

          {/* Menu - Hidden on small, flex on medium and up */}
          <nav className="hidden md:flex space-x-6 items-center">
            <ul className="flex gap-5">
              <li>
                <Link className="text-gray-700 hover:text-blue-600" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 hover:text-blue-600"
                  href="/contact"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

import Link from "next/link";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("hello world");
  return (
    <html lang="en">
      <body>
        <div>
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
                    <Link
                      className="text-gray-700 hover:text-blue-600"
                      href="/"
                    >
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
        </div>
        <div>{children}</div>
        <footer className="bg-gray-100 text-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Brand / Logo */}
            <div>
              <h2 className="text-xl font-semibold">MyCompany</h2>
              <p className="mt-2 text-sm">
                &copy; {new Date().getFullYear()} MyCompany. All rights
                reserved.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-2">Contact</h3>
              <ul className="text-sm space-y-1">
                <li>Email: info@mycompany.com</li>
                <li>Phone: +62 812-3456-7890</li>
                <li>Address: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

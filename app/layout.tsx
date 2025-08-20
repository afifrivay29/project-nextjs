import Link from "next/link";

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
          <header>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div>{children}</div>
        <div>
          <footer>[footer]</footer>
        </div>
      </body>
    </html>
  );
}

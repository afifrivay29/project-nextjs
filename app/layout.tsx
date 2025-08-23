import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css";
import { inter } from "../app/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("hello world");
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>
          <Header />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-4">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

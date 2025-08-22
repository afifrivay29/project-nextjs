import Header from "../components/header";
import Footer from "../components/Footer";
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

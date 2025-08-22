export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h1>Halaman Blog</h1>
      </div>
      <div>{children}</div>
    </>
  );
}

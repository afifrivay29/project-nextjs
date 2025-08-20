export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>
        <h1>Halaman Blog</h1>
        <p>List blogs :</p>
      </div>
    </>
  );
}

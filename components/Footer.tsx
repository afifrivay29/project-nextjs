export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand / Logo */}
          <div>
            <h2 className="text-xl font-semibold">MyCompany</h2>
            <p className="mt-2 text-sm">
              &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
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
    </>
  );
}

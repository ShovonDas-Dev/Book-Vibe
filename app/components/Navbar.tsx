

import Link from "next/link";


const links = [
  { href: "/", label: "Home" },
  { href: "/listed-books", label: "Listed Books" },
  { href: "/pages-to-read", label: "Pages to Read" },
];

export default function Navbar() {
  

  

  return (
    <header className="mx-auto w-full max-w-6xl px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#131313]">
          Book Vibe
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-3 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/signin"
            className="rounded-lg bg-[#23BE0A] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-[#59C6D2] px-6 py-3 text-[15px] font-semibold text-white transition hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-[#131313] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-2 lg:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={linkClass(href)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-2 flex gap-3">
            <Link
              href="/signin"
              className="flex-1 rounded-lg bg-[#23BE0A] px-6 py-3 text-center font-semibold text-white"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="flex-1 rounded-lg bg-[#59C6D2] px-6 py-3 text-center font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

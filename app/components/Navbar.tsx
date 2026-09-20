

import Link from "next/link";


const links = [
  { href: "/", label: "Home" },
  { href: "/listed-books", label: "Listed Books" },
  { href: "/pages-to-read", label: "Pages to Read" },
];

export default function Navbar() {
  
  const renderLinks =[
      <li key="item-1" className="text-white"><Link href="/">Home</Link></li>,
      <li key="item-2 " className="text-white"><Link href="/listed-books">Listed Books</Link></li>,
      <li key="item-3" className="text-white"><Link href="/pages-to-read">Pages to Read</Link></li>
  ]

  return (
    <section className="shadow-sm">
          <div className="container mx-auto px-4 navbar bg-gray-500 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {renderLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 text-white">Button</a>
  </div>
</div>
    </section>
  );
}

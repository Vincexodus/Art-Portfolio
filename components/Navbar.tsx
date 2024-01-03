import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">WORK</Link></li>
            <li><Link href="/Bios">BIO</Link></li>
            <li><Link href="/CV">CV</Link></li>
            <li><Link href="/Contact">CONTACT</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Jack Chin</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">WORK</Link></li>
          <li><Link href="/Bios">BIO</Link></li>
          <li><Link href="/CV">CV</Link></li>
          <li><Link href="/Contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar
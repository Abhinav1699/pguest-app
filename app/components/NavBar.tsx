import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="m-5 max-w-3xl max-auto py-4 flex gap-x-4 border-b-2">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/actions">Actions</Link>
    </nav>
  );
};

export default NavBar;

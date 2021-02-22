import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mx-auto max-w-xl py-20 text-center">
      <Link href="/">
        <a href="#" className="block text-2xl mb-12">
          Company Name
        </a>
      </Link>

      <ul className="flex justify-center uppercase text-xs">
        <Link href="/">
          <a className="mx-4 text-gray-600">Home</a>
        </Link>
        <li>
          <Link href="#">
            <a className="mx-4 hover:text-gray-600">About</a>
          </Link>
        </li>
        <li>
          <Link href="blog">
            <a className="mx-4 hover:text-gray-600">Blog</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

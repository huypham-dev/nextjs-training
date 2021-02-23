import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ navigation, logo }) => {
  return (
    <header className="mx-auto max-w-xl py-10 text-center">
      <Link href="/">
        <a href="#" className="block text-2xl mb-12">
        <Image src={logo} width={150} height={150} />
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

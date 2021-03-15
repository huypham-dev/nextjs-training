import { memo } from "react";
import Link from "next/link";

const Footer = (): JSX.Element => (
  <footer className="w-full bg-white px-6 border-t">
    <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
      &copy;2021 Your Company. All rights reserved.
      <div className="pt-4 md:p-0 text-center md:text-right text-xs">
        <Link href="/policy">
          <a className="text-black no-underline hover:underline">
            Privacy Policy
          </a>
        </Link>
        <Link href="/condition">
          <a className="text-black no-underline hover:underline ml-4">
            Terms &amp; Conditions
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-black no-underline hover:underline ml-4">
            Contact Us
          </a>
        </Link>
      </div>
    </div>
  </footer>
);

export default memo(Footer);

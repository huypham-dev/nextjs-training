import { memo } from "react";

import LinkBase from "components/Link";

const Footer = (): JSX.Element => (
  <footer className="w-full bg-black px-6 border-t text-white">
    <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
      &copy;2021 Your Company. All rights reserved.
      <div className="pt-4 md:p-0 text-center md:text-right text-xs">
        <LinkBase href="/policy" className="no-underline hover:underline">
          Privacy Policy
        </LinkBase>
        <LinkBase
          href="/condition"
          className="no-underline hover:underline ml-4"
        >
          Terms &amp; Conditions
        </LinkBase>
        <LinkBase href="/contact" className="no-underline hover:underline ml-4">
          Contact Us
        </LinkBase>
      </div>
    </div>
  </footer>
);

export default memo(Footer);

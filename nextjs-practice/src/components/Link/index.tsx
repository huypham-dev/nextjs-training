import { memo } from "react";

import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const LinkBase = ({ children, className, ...linkProps }: Props) => (
  <Link {...linkProps}>
    <a className={className}>{children}</a>
  </Link>
);

export default memo(LinkBase);

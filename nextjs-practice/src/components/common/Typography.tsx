import { memo } from "react";
import isEqual from "react-fast-compare";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

type Props = {
  children: React.ReactNode;
  variant?: string;
  className?: string;
};

const Typography = ({ variant, children, className }: Props): JSX.Element => {
  const Component = variant ? variantsMapping[variant] : "p";

  return <Component className={className}>{children}</Component>;
};

export default memo(Typography, isEqual);

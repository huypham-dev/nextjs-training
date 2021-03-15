import { memo } from "react";
import isEqual from "react-fast-compare";

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  onClick,
  className = "",
  label,
  disabled = false,
}: ButtonProps) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

export default memo(Button, isEqual);

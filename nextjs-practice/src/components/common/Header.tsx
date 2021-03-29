import { memo } from "react";

import { NavigationItem } from "types";
import isEqual from "react-fast-compare";
import Button from "./Button";
import LinkBase from "components/Link";

type Props = {
  navigations: NavigationItem[];
  onShowForm: () => void;
};

const Header = ({ navigations, onShowForm }: Props) => (
  <header className="bg-black text-white font-bold mb-12">
    <div className="p-6 container mx-auto flex flex-wrap items-center justify-between">
      <LinkBase
        href="/"
        className="mb-6 md:mb-0 w-full text-center md:text-left md:w-auto font-display font-black text-3xl uppercase"
      >
        Blog.
      </LinkBase>
      <ul className="justify-center md:justify-end flex-1 flex items-center">
        {navigations.map(({ label, path }) => (
          <li key={label}>
            <LinkBase
              href={path}
              className="text-gray-50 font-bold text-sm py-2 px-4 mx-2 hover:underline"
            >
              {label}
            </LinkBase>
          </li>
        ))}
        <li>
          <Button
            label="Login"
            onClick={onShowForm}
            className="text-gray-50 border-white border text-sm py-2 px-4 mx-2"
          />
        </li>
      </ul>
    </div>
  </header>
);

export default memo(Header, isEqual);

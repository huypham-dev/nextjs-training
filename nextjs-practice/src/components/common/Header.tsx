import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationItem } from "types";
import isEqual from "react-fast-compare";

type Props = {
  navigations: NavigationItem[];
};

const Header = ({ navigations }: Props) => (
  <header className="w-full mx-auto text-center">
    <Link href="/">
      <a className="inline-block text-2xl mb-12">
        <Image
          src="https://images.prismic.io/nextjsexample/ebd683dd-af14-49e3-bef5-5c497c9b8cac_logo.png"
          alt="logo"
          width={150}
          height={150}
        />
      </a>
    </Link>

    <ul className="flex justify-center b p-5 uppercase text-xs border-t border-b bg-gray-100">
      {navigations.map(({ label, path }) => (
        <li key={label}>
          <Link href={path}>
            <a className="text-gray-600 font-bold text-sm py-2 px-4 mx-2 hover:text-black">
              {label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </header>
);

export default memo(Header, isEqual);

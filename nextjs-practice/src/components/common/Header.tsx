import React from "react";

import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import { NavigationType } from "models";

type Props = {
  logo: string;
  navigation: NavigationType[];
};

const Header = ({ navigation = [], logo }: Props) => {
  return (
    <header className="mx-auto max-w-xl py-10 text-center">
      <Link href="/">
        <a href="#" className="block text-2xl mb-12">
          <Image src={logo} width={150} height={150} />
        </a>
      </Link>

      <ul className="flex justify-center uppercase text-xs">
        {navigation.map(({ navigation_path, navigation_label }) => (
          <li key={RichText.asText(navigation_label)}>
            <Link href={RichText.asText(navigation_path)}>
              <a className="mx-4 text-gray-600 font-bold text-sm">
                {RichText.asText(navigation_label)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

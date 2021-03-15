import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const Introduce = () => (
  <div className="mx-auto max-w-6xl bg-white shadow-xl py-10 mb-10">
    <div className="max-w-5xl mx-auto p-8 flex justify-start items-center">
      <div className="flex-1">
        <h1 className="font-display-italic font-extrabold text-5xl md:text-6xl italic leading-none mb-12">
          Introducing
        </h1>
        <p className="leading-loose max-w-xl">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book
        </p>
      </div>
      <div className="hidden md:block w-56">
        <Link href="/about">
          <a className="ml-12 bg-yellow-400 py-6 px-10 hover:opacity-70">
            Learn more
          </a>
        </Link>
      </div>
    </div>
    <div className="w-full px-10 text-center">
      <Image
        src="https://images.prismic.io/nextjsexample/b56dc3ae-2008-424b-9833-5f118c0754c9_intro.jpeg"
        alt="introduce"
        width={976}
        height={256}
        layout="responsive"
      />
    </div>
  </div>
);

export default memo(Introduce);

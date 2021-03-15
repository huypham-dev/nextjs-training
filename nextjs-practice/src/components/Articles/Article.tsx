import { memo } from "react";

import Link from "next/link";
import Image from "next/image";
import { PostType } from "types";
import isEqual from "react-fast-compare";

type Props = {
  article: PostType;
};

const Article = ({ article }: Props) => {
  const { id, image, title, category, content } = article;

  return (
    <article className="max-w-md mx-auto rounded-md shadow-md overflow-hidden md:max-w-2xl mb-12">
      <div className="md:flex">
        <Link href={`/post/${id}`}>
          <a className="flex flex-shrink-0 justify-center md:items-center">
            <Image src={image} alt="article image" width={250} height={150} />
          </a>
        </Link>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {category}
          </div>
          <Link href={`/post/${id}`}>
            <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {title}
            </a>
          </Link>
          <p className="mt-2 text-gray-500">{content.substring(0, 100)}...</p>
        </div>
      </div>
    </article>
  );
};

export default memo(Article, isEqual);

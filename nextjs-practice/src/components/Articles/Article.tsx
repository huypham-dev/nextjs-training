import React from "react";

import Link from "next/link";
import Image from "next/image";
import { PostType } from "models";

type Props = {
  article: PostType;
};

const Article = ({ article }: Props) => {
  return (
    <article className="mb-12">
      <div className="float-left">
        <Link href={`/post/${article.id}`}>
          <a>
            <Image src={article.image} width={250} height={150} />
          </a>
        </Link>
      </div>
      <div className="ml-72">
        <h2 className="mb-4">
          <Link href={`/post/${article.id}`}>
            <a className="text-black text-xl md:text-2xl no-underline hover:opacity-70 font-bold">
              {article.title}
            </a>
          </Link>
        </h2>

        <div className="mb-4 text-sm text-gray-700">
          <Link href={`/posts/${article.category}`}>
            <a className="text-gray-700 font-bold hover:text-gray-400">
              {article.category.toUpperCase()}
            </a>
          </Link>
        </div>

        <p className="text-gray-800 leading-normal">
          {article.content.substring(0, 100)}...
        </p>
      </div>
    </article>
  );
};

export default Article;

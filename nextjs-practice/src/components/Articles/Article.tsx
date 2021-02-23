import React from "react";
import Link from "next/link";
import Image from "next/image";

const Article = ({ article }) => {
  return (
    <article className="mb-12">
      <div className="float-left">
        <Link href="#">
          <a>
            <Image src={article.image} width={150} height={150} />
          </a>
        </Link>
      </div>
      <div>
        <h2 className="mb-4">
          <a
            href="#"
            className="text-black text-xl md:text-2xl no-underline hover:underline"
          >
            {article.title}
          </a>
        </h2>

        <div className="mb-4 text-sm text-gray-700">
          by{" "}
          <a href="#" className="text-gray-700">
            {article.author}
          </a>{" "}
          {article.createdAt}
          <span className="font-bold mx-1"> | </span>
          <a href="#" className="text-gray-700">
            {article.category}
          </a>
        </div>

        <p className="text-gray-700 leading-normal">
          {article.content}
        </p>
      </div>
    </article>
  );
};

export default Article;

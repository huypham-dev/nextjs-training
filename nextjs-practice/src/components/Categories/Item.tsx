import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  categoryName: string;
};

const CategoryItem = ({ imageUrl, categoryName }: Props) => (
  <div className="w-1/3 p-2">
    <Link href={`/blog/${categoryName}`}>
      <a className="block mb-8 text-center hover:opacity-70">
        <Image
          className="rounded-full"
          src={imageUrl}
          width={200}
          height={200}
        />
      </a>
    </Link>
    <p className="text-xl text-center">{categoryName.toUpperCase()}</p>
  </div>
);

export default CategoryItem;

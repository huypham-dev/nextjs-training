import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  categoryName: string;
};

const CategoryItem = ({ imageUrl, categoryName }: Props) => (
  <div className="w-1/3 p-2">
    <Link href="#">
      <a className="block mb-8 text-center">
        <Image src={imageUrl} width={200} height={200} />
      </a>
    </Link>
    <Link href="#">
      <a href="#" className="block text-xl text-center">
        {categoryName}
      </a>
    </Link>
  </div>
);

export default CategoryItem;

import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  categoryName: string;
};

const CategoryItem = ({ imageUrl, categoryName }: Props) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-6 p-2">
    <Link href={`/blog/${categoryName}`}>
      <a className="block mb-8 text-center hover:opacity-70">
        <Image src={imageUrl} alt={categoryName} width={100} height={100} />
      </a>
    </Link>
    <p className="text-xl text-center">{categoryName.toUpperCase()}</p>
  </div>
);

export default memo(CategoryItem);

import { memo } from "react";

import { CategoryType } from "types";
import CategoryItem from "./Item";
import isEqual from "react-fast-compare";

type Props = {
  data: CategoryType[];
};

const Categories = ({ data }: Props) => (
  <div className="mx-auto max-w-6xl bg-white py-10 px-12 lg:px-24 shadow-xl mb-6">
    <h1 className="font-display-italic font-extrabold text-5xl md:text-6xl italic leading-none mb-12">
      Categories
    </h1>
    <div className="flex flex-wrap -mx-2">
      {data.map((item) => (
        <CategoryItem
          key={item.id}
          imageUrl={item.image}
          categoryName={item.name}
        />
      ))}
    </div>
  </div>
);

export default memo(Categories, isEqual);

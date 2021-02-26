import React from "react";

import { CategoryType, CategoryHeadType } from "models";
import CategoryItem from "./Item"

type Props = {
  data: CategoryType[];
  prismicData: CategoryHeadType;
};


const Categories = ({ data, prismicData }: Props) => {
  const { heading, description } = prismicData;

  return (
    <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="mb-12">
        <h1 className="text-3xl lg:text-4xl text-center mb-6 tracking-wider">
          {heading}
        </h1>

        <p className="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">
          {description}
        </p>
      </div>

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
};

export default Categories;

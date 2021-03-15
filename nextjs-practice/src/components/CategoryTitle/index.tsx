import { memo } from "react";

type Props = {
  category: string;
};

const CategoryTitle = ({ category }: Props) => (
  <div className="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
    <h1 className="text-xl md:text-4xl pb-4">{category.toUpperCase()}</h1>
    <p className="leading-loose text-gray-dark">
      Catch up on the latest news and updates.
    </p>
  </div>
);

export default memo(CategoryTitle);

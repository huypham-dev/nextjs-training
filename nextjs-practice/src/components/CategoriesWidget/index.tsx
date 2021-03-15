import { memo } from "react";

import Link from "next/link";
import { CategoryType } from "types";
import isEqual from "react-fast-compare";

type Props = {
  data: CategoryType[];
};

const CategoriesWidget = ({ data = [] }: Props) => (
  <div className="w-full md:w-64">
    <aside className="rounded shadow overflow-hidden">
      <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">
        Categories
      </h3>

      <div className="p-4">
        <ul className="list-reset leading-normal">
          {data.map((item) => (
            <li key={item.id}>
              <Link href={`/blog/${item.name}`}>
                <a className="text-gray-darkest text-sm hover:underline">
                  {item.name.toUpperCase()}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
);

export default memo(CategoriesWidget, isEqual);

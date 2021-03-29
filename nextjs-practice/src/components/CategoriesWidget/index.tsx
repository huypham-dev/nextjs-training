import { memo } from "react";

import { CategoryType } from "types";
import isEqual from "react-fast-compare";
import { ROUTES } from "constants/routes";
import Typography from "components/common/Typography";
import LinkBase from "components/Link";

type Props = {
  data: CategoryType[];
};

const CategoriesWidget = ({ data = [] }: Props) => (
  <div className="w-full md:w-64">
    <aside className="rounded shadow overflow-hidden">
      <Typography
        variant="h2"
        className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b"
      >
        Categories
      </Typography>

      <div className="p-4">
        <ul className="list-reset leading-normal">
          {data.map((item) => (
            <li key={item.id}>
              <LinkBase
                href={ROUTES.blog.withId(item.name)}
                className="text-gray-darkest text-sm hover:underline"
              >
                {item.name.toUpperCase()}
              </LinkBase>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  </div>
);

export default memo(CategoriesWidget, isEqual);

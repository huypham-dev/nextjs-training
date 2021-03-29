import { memo } from "react";

import Image from "next/image";
import LinkBase from "components/Link";
import { ROUTES } from "constants/routes";
import Typography from "components/common/Typography";

type Props = {
  imageUrl: string;
  categoryName: string;
};

const CategoryItem = ({ imageUrl, categoryName }: Props) => (
  <div className="w-full md:w-1/2 lg:w-1/3 px-6 p-2">
    <LinkBase
      className="block mb-8 text-center hover:opacity-70"
      href={ROUTES.blog.withId(categoryName)}
    >
      <Image src={imageUrl} alt={categoryName} width={100} height={100} />
    </LinkBase>
    <Typography className="text-xl text-center">
      {categoryName.toUpperCase()}
    </Typography>
  </div>
);

export default memo(CategoryItem);

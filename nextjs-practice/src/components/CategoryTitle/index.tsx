import Typography from "components/common/Typography";
import { memo } from "react";

type Props = {
  category: string;
};

const CategoryTitle = ({ category }: Props) => (
  <div className="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
    <Typography variant="h2" className="text-xl md:text-4xl pb-4">
      {category.toUpperCase()}
    </Typography>
    <Typography className="leading-loose text-gray-dark">
      Catch up on the latest news and updates.
    </Typography>
  </div>
);

export default memo(CategoryTitle);

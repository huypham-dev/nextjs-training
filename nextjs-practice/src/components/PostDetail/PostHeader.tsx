import { memo } from "react";

import Typography from "components/common/Typography";
import LinkBase from "components/Link";
import { ROUTES } from "constants/routes";

type Props = {
  author: string;
  category: string;
  createdAt: string;
};

const PostHeader = ({ author, category, createdAt }: Props) => (
  <div>
    <Typography>
      By <b>{author}</b> |
      <LinkBase
        href={ROUTES.blog.withId(category)}
        className="hover:text-red-400"
      >
        <b>{category && category.toUpperCase()}</b>
      </LinkBase>
    </Typography>
    <Typography className="mb-10">
      Created: {createdAt && createdAt.substring(0, 10)}
    </Typography>
  </div>
);

export default memo(PostHeader);

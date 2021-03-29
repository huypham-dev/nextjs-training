import { memo } from "react";

import Typography from "components/common/Typography";
import Post from "components/Featured/Post";
import isEqual from "react-fast-compare";
import { PostType } from "types";

type Props = {
  type: string;
  articles: PostType[];
};

const ArticlesByType = ({ type, articles }: Props): JSX.Element => (
  <div>
    <Typography
      variant="h2"
      className="text-3xl font-bold border-l-4 border-red-400 pl-4"
    >
      {type}
    </Typography>
    <div className="container mx-auto flex flex-wrap pb-20 px-10">
      {articles.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  </div>
);

export default memo(ArticlesByType, isEqual);

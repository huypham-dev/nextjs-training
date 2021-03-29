import { memo } from "react";

import { PostType } from "types";
import LinkBase from "components/Link";
import Image from "next/image";
import isEqual from "react-fast-compare";
import { ROUTES } from "constants/routes";
import Typography from "components/common/Typography";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const { id, title, image, view } = post;

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-6 p-5">
      <div className="bg- p-4 rounded-md shadow-xl border-gray-200 border-2">
        <Typography
          variant="h2"
          className="text-md font-extrabold tracking-widest mb-2"
        >
          {title}
        </Typography>
        <div className="w-full text-center">
          <Image
            className="rounded-lg"
            src={image}
            alt="article image"
            width={250}
            height={150}
            layout="responsive"
          />
        </div>
        <Typography className="text-xs text-gray-500 mb-4">
          {view} <i>views</i>
        </Typography>
        <LinkBase
          href={ROUTES.post.withId(id)}
          className="inline-block border-2 border-black py-3 px-8 uppercase font-display font-thin tracking-wide text-xs hover:bg-yellow-400 hover:border-yellow-400"
        >
          Read more
        </LinkBase>
      </div>
    </div>
  );
};

export default memo(Post, isEqual);

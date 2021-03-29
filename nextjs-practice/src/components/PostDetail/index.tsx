import { memo } from "react";

// types
import { PostType } from "types";

// components
import PostHeader from "components/PostDetail/PostHeader";
import PostContent from "components/PostDetail/PostContent";

type Props = {
  post: PostType;
};

const PostDetail = ({ post }: Props) => {
  const { title, author, category, createdAt, image, content } = post;

  return (
    <>
      <PostHeader author={author} category={category} createdAt={createdAt} />
      <PostContent title={title} content={content} image={image} />
    </>
  );
};

export default memo(PostDetail);

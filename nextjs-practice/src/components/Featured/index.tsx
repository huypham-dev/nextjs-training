import { memo } from "react";
import Post from "./Post";
import { PostType } from "types";
import isEqual from "react-fast-compare";

type Props = {
  featuredPosts: PostType[];
};

const Featured = ({ featuredPosts }: Props) => (
  <div className="mx-auto max-w-6xl bg-white shadow-xl mb-10">
    <div className="max-w-5xl mx-auto pt-10 p-8 flex">
      <h3 className="font-extrabold text-5xl md:text-6xl italic leading-none max-w-xl">
        Featured Posts
      </h3>
    </div>
    <div className="container mx-auto flex flex-wrap pb-20 px-10">
      {featuredPosts.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  </div>
);

export default memo(Featured, isEqual);

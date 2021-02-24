import React from "react";
import { PostType } from "../../models";
import Article from "./Article";

type Props = {
  data: PostType[];
};

const Articles = ({ data }: Props) => {
  return (
    <div className="w-full md:pr-12 mb-12">
      {data.map((item) => (
        <Article key={item.id} article={item} />
      ))}
    </div>
  );
};

export default Articles;

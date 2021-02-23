import React from "react";
import Article from "./Article";

const Articles = ({data}) => {
  return (
    <div className="w-full md:pr-12 mb-12">
      {data.map(item => <Article key={item.id} article={item} />)}
    </div>
  );
};

export default Articles;

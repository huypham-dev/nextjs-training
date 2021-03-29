import { GetStaticProps, NextPage } from "next";
import Categories from "../components/Categories";
import Introduce from "../components/Introduce";
import { API } from "utils/api";
import Featured from "components/Featured";
import { CategoryType, PostType } from "types";
import { memo } from "react";
import isEqual from "react-fast-compare";
import Layout from "components/common/Layout";

type Props = {
  categoryList: CategoryType[];
  featuredPosts: PostType[];
};

export const Home: NextPage<Props> = ({
  categoryList = [],
  featuredPosts = [],
}: Props) => (
  <Layout title="Home">
    <Introduce />
    <Featured featuredPosts={featuredPosts} />
    <Categories data={categoryList} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const categoryRes = await API.fetchAllCategories();
  const featuredPostRes = await API.fetchFeaturedPosts();
  const categoriesErrorCode = categoryRes.errorCode;
  const featuredErrorCode = featuredPostRes.errorCode;

  return {
    props: {
      categoryList: categoriesErrorCode ? [] : categoryRes,
      featuredPosts: featuredErrorCode ? [] : featuredPostRes,
    },
  };
};

export default memo(Home, isEqual);

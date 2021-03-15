import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import Categories from "../components/Categories";
import Introduce from "../components/Introduce";
import { API } from "utils/api";
import Featured from "components/Featured";
import { CategoryType, PostType } from "types";

type Props = {
  categoryList: CategoryType[];
  featuredPosts: PostType[];
};

export const Home: NextPage<Props> = ({
  categoryList = [],
  featuredPosts = [],
}: Props) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Introduce />
    <Featured featuredPosts={featuredPosts} />
    <Categories data={categoryList} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const categoryRes = await API.fetchAllCategories();
  const featuredPostRes = await API.fetchFeaturedPosts();

  return {
    props: {
      categoryList: categoryRes.errorCode ? [] : categoryRes,
      featuredPosts: featuredPostRes.errorCode ? [] : featuredPostRes,
    },
  };
};

export default Home;

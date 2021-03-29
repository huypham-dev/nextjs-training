import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

// Components
import CategoryTitle from "components/CategoryTitle";
import Articles from "components/Articles";
import CategoriesWidget from "components/CategoriesWidget";
import { CategoryType, PostType } from "types";
import { API } from "utils/api";
import Indicator from "components/Indicator";
import { capitalizeFirstLetter } from "utils/format";
import Layout from "components/common/Layout";

type Props = {
  posts: PostType[];
  categories: CategoryType[];
};

const Blog: NextPage<Props> = ({ posts = [], categories = [] }: Props) => {
  const { query, isFallback } = useRouter();
  const { path = [] } = query;
  const title = path.length ? path[0] : "All post";

  if (isFallback) {
    return <Indicator />;
  }

  return (
    <Layout title={capitalizeFirstLetter(title)}>
      <div className="mx-auto max-w-6xl bg-white py-4 px-12 shadow-xl mb-24">
        <CategoryTitle category={title} />
        <div className="container max-w-6xl mx-auto md:flex items-start py-8 md:px-0">
          <Articles data={posts} />
          <CategoriesWidget data={categories} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params = { path: null },
}) => {
  let postResponse;

  if (params.path && params.path.length) {
    postResponse = await API.fetchPostsByCategory(params.path[0]);
  } else {
    postResponse = await API.fetchAllPost();
  }
  const categoriesResponse = (await API.fetchAllCategories()) || [];
  const postsErrorCode = postResponse.errorCode;
  const categoriesErrorCode = categoriesResponse.errorCode;

  return {
    props: {
      categories: categoriesErrorCode ? [] : categoriesResponse,
      posts: postsErrorCode ? [] : postResponse,
      error: postResponse,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await API.fetchAllCategories();

  const paths = categories.errorCode
    ? []
    : categories.map((item) => ({
        params: {
          path: [item.name],
        },
      }));

  return {
    paths: [
      ...paths,
      {
        params: { path: [] },
      },
    ],
    fallback: categories.errorCode ? true : false,
  };
};

export default Blog;

import React from "react";

import { GetStaticProps } from "next";
import { Client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

// Components
import Head from "next/head";
import CategoryTitle from "components/CategoryTitle";
import Articles from "components/Articles";
import CategoriesWidget from "components/CategoriesWidget";
import Layout from "components/common/Layout";
import { CategoryType, FooterDataType, NavigationType, PostType } from "models";
import { API } from "utils/api";

type Props = {
  doc: any;
  posts: PostType[];
  categories: CategoryType[];
};

const Blog = ({ doc, posts, categories }: Props) => {
  const { data } = doc || {};
  const { logo, footer_left_text, footer_right_text, navigation } = data;
  const prismicFooter: FooterDataType = {
    leftText: RichText.asText(footer_left_text),
    rightText: RichText.asText(footer_right_text),
  };
  const { query } = useRouter();

  return (
    <Layout
      logo={logo?.url}
      navigation={navigation as NavigationType[]}
      footerData={prismicFooter}
    >
      <div className="mx-auto max-w-6xl bg-white py-4 px-12 shadow-xl mb-24">
        <Head>
          <title>Blog</title>
        </Head>
        <CategoryTitle category={query.category as string} />
        <div className="container max-w-6xl mx-auto md:flex items-start py-8 md:px-0">
          <Articles data={posts} />
          <CategoriesWidget data={categories} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};
  const posts = await API.fetchPostsByCategory(params.category) || []
  const categories = await API.fetchAllCategories() || []

  return {
    props: {
      doc,
      posts,
      categories,
    },
  };
};

export async function getStaticPaths() {
  const categories = await API.fetchAllCategories()
  const paths = categories.map((item) => ({
    params: {
      category: item.name,
    },
  }));

  return {
    paths,
    fallback: false, // 404 page if any paths not returned
  };
}

export default Blog;

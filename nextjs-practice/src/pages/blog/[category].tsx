import React from "react";

import Head from "next/head";
import HeaderBlog from "../../components/HeaderBlog";
import Articles from "../../components/Articles";
import CategoriesWidget from "../../components/CategoriesWidget";
import Layout from "../../components/common/Layout";
import { GetStaticProps } from "next";
import { Client } from "../../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import {
  CategoryType,
  FooterDataType,
  NavigationType,
  PostType,
} from "../../models";

type Props = {
  doc: any;
  posts: PostType[];
  categories: CategoryType[];
};

const Blog = ({ doc, posts, categories }: Props) => {
  
  const { data } = doc;
  const { logo, footer_left_text, footer_right_text, navigation } = data;
  const prismicFooter: FooterDataType = {
    leftText: RichText.asText(footer_left_text),
    rightText: RichText.asText(footer_right_text),
  };

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
        <HeaderBlog />
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
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};
  const posts = await (
    await fetch(`https://5f7c244700bd74001690a4a7.mockapi.io/posts?category=${params.category}`)
  ).json();
  const categories = await (
    await fetch("https://5f7c244700bd74001690a4a7.mockapi.io/categories")
  ).json();

  return {
    props: {
      doc,
      preview,
      posts,
      categories,
    },
  };
};

export async function getStaticPaths() {
  const categories = await (
    await fetch("https://5f7c244700bd74001690a4a7.mockapi.io/categories")
  ).json();
  const paths = categories.map((item) => ({
    params: {
      category: item.name,
    },
  }));
console.log(paths);

  return {
    paths,
    fallback: false, // 404 page if any paths not returned
  };
}

export default Blog;

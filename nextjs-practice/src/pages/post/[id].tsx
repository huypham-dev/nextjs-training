import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../../components/common/Layout";
import { Client } from "../../../prismic-configuration";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

const BlogPost = ({ doc, post }) => {
  const { data } = doc;
  const { logo, footer_left_text, footer_right_text, navigation } = data;
  const prismicFooter = {
    leftText: RichText.asText(footer_left_text),
    rightText: RichText.asText(footer_right_text),
  };

  return (
    <Layout logo={logo?.url} navigation={navigation} footerData={prismicFooter}>
      <Head>
        <title>{post?.title || ""}</title>
      </Head>
      <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <p>
          by <b>{post?.author}</b> |{" "}
          <Link href="#">
            <a className="hover:text-red-400">
              <b>{post?.category}</b>
            </a>
          </Link>
        </p>
        <p>Created: {post.createdAt}</p>
        <div className="bg-white-half w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
              {post?.title}
            </h1>
            <p className="text-gray-500 text-lg max-w-lg">{post?.intro}</p>
            <div className="w-full my-10">
              <Image src={post?.image} width={700} height={400} />
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center p-6 flex flex-col items-center">
          <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
            {post?.content}
          </div>
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
  const post = await (
    await fetch(
      `https://5f7c244700bd74001690a4a7.mockapi.io/posts/${params.id}`
    )
  ).json();

  return {
    props: {
      doc,
      preview,
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts = await (
    await fetch("https://5f7c244700bd74001690a4a7.mockapi.io/posts")
  ).json();
  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false, // 404 page if any paths not returned
  };
}

export default BlogPost;

import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "components/common/Layout";
import { Client } from "../../../prismic-configuration";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";
import { API } from "utils/api";

const BlogPost = ({ doc, post }) => {
  const { data } = doc || {};
  const { logo, footer_left_text, footer_right_text, navigation } = data || {};
  const prismicFooter = {
    leftText: RichText.asText(footer_left_text),
    rightText: RichText.asText(footer_right_text),
  };

  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
  previewData = {},
}) => {
  const { ref } = previewData || {};
  const client = Client();
  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};

  try {
    const post = (await API.fetchPostItem(params.id)) || {};

    return {
      props: {
        doc,
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BlogPost;

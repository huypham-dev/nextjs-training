import Head from "next/head";
import { GetStaticProps } from "next";
import { Client } from "../../prismic-configuration";
import Categories from "../components/Categories";
import Introduce from "../components/Introduce";
import Layout from "../components/common/Layout";
import { RichText } from "prismic-reactjs";

export default function Home({ doc, categories }) {
  console.log(doc);
  const { data } = doc;
  const {
    info_heading,
    info_image,
    info_description,
    info_intro,
    logo,
    categories_heading,
    categories_description,
    footer_left_text,
    footer_right_text,
    navigation,
  } = data;
  const introduceData = {
    heading: RichText.asText(info_heading),
    intro: RichText.asText(info_intro),
    image: info_image.url,
    desc: RichText.asText(info_description),
  };

  const prismicCategories = {
    heading: RichText.asText(categories_heading),
    description: RichText.asText(categories_description),
  };
  const prismicFooter = {
    leftText: RichText.asText(footer_left_text),
    rightText: RichText.asText(footer_right_text),
  };

  return (
    <Layout logo={logo?.url} navigation={navigation} footerData={prismicFooter}>
      <Head>
        <title>Home</title>
      </Head>
      <Introduce data={introduceData} />
      <Categories prismicData={prismicCategories} data={categories} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = null,
  previewData = {},
}) => {
  const { ref } = previewData || {};

  const client = Client();
  const doc = (await client.getSingle("homepage", ref ? { ref } : null)) || {};
  const categories = await (
    await fetch("https://5f7c244700bd74001690a4a7.mockapi.io/categories")
  ).json();

  return {
    props: {
      doc,
      categories,
      preview,
    },
  };
};

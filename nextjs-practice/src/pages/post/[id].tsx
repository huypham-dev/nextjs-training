import Link from "next/link";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { API } from "utils/api";
import { PostType } from "types";

type Props = {
  post: PostType;
};

const BlogPost: NextPage<Props> = ({ post }: Props) => {
  const { title, author, category, createdAt, image, content } = post || {};

  return (
    <>
      <Head>
        <title>{title || ""}</title>
      </Head>
      <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <p>
          By <b>{author}</b> |{" "}
          <Link href={`/blog/${category}`}>
            <a className="hover:text-red-400">
              <b>{category}</b>
            </a>
          </Link>
        </p>
        <p className="mb-10">Created: {createdAt.substring(0, 10)}</p>
        <div className="bg-white-half w-full">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
              {title}
            </h1>
            <div className="w-full my-10">
              <Image src={image} alt="article image" width={700} height={400} />
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center p-6 flex flex-col items-center">
          <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await API.fetchPostItem(params.id);

  return {
    props: {
      post: result,
      error: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await API.fetchAllPost();
  const paths = posts.errorCode
    ? []
    : posts.map(({ id }) => ({
        params: {
          id,
        },
      }));
  return {
    paths,
    fallback: posts.errorCode ? true : false,
  };
};

export default BlogPost;

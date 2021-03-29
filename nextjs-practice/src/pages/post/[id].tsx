import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

// types
import { PostType } from "types";

// components
import ArticlesByType from "components/ArticlesByType";
import Layout from "components/common/Layout";
import Button from "components/common/Button";

// api
import { API } from "utils/api";
import PostDetail from "components/PostDetail";

type Props = {
  post: PostType;
  featured: PostType[];
};

const CommentList = dynamic(() => import("../../components/CommentList"));

const BlogPost: NextPage<Props> = ({ post, featured }: Props) => {
  const { title, comments } = post || {};
  const [isComment, setIsComment] = useState(false);
  const toggleComment = () => setIsComment(!isComment);

  return (
    <Layout title={title}>
      <div className="mx-auto max-w-6xl bg-white px-12 lg:px-10 shadow-xl mb-24">
        <PostDetail post={post} />
        <div className="pb-10">
          <Button
            label="Show comments &darr;"
            className="bg-blue-400 p-2 rounded-md mb-4 text-white"
            onClick={toggleComment}
          />
          <div className="ml-4">
            {isComment && <CommentList comments={comments} />}
          </div>
        </div>
        <ArticlesByType type="Featured Post" articles={featured} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await API.fetchPostItem(params.id);
  const featured = await API.fetchFeaturedPosts();
  const featuredErrorCode = featured.errorCode;
  const postErrorCode = post.errorCode;

  return {
    props: {
      featured: featuredErrorCode ? [] : featured,
      post: postErrorCode ? {} : post,
      error: (postErrorCode && post) || {},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsResponse = await API.fetchAllPost();
  const postsErrorCode = postsResponse.errorCode;
  const paths = postsErrorCode
    ? []
    : postsResponse.map(({ id }) => ({
        params: {
          id,
        },
      }));
  return {
    paths,
    fallback: postsErrorCode ? true : false,
  };
};

export default memo(BlogPost);

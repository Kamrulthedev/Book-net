import PostDetails from "@/components/ui/PostDetails";
import { getPost } from "@/services/PostService";
import React from "react";

type TParamsProps = {
  params: {
    postId: string;
  };
};

const PostDetailsPage = async ({ params }: TParamsProps) => {
  const post = await getPost(params.postId);
  return (
    <div className="p-8">
      <PostDetails post={post}></PostDetails>
    </div>
  );
};

export default PostDetailsPage;

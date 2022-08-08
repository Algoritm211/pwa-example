import React from 'react';
import {useGetPosts} from "../../hooks/post";
import {PostCard} from "./Post";

export const Posts: React.FC = () => {
  const {data: posts, isLoading} = useGetPosts();

  if (isLoading) {
    return <div>Loading...</div>
  }

  const postsBlock = posts?.map(post => {
    return (
      <PostCard post={post} key={post?.id} />
    )
  })

  return (
    <section className="grid grid-cols-3 gap-2 py-5">
      {postsBlock}
    </section>
  );
};

import React from 'react';
import { Post } from '../../api/posts';

interface Props {
  post: Post
}

export const PostCard: React.FC<Props> = ({post}) => {
  // const  = post;
  return (
    <div className='border h-full bg-white hover:bg-gray-100 rounded-lg cursor-pointer overflow-hidden'>
      <div className="overflow-hidden">
        {/*<img*/}
        {/*  className='h-60 w-full object-cover group-hover:scale-105*/}
        {/*     transition-transform duration-400'*/}
        {/*  src={*/}
        {/*    */}
        {/*  } alt='post_image'*/}
        {/*/>*/}
      </div>
      <div className='flex justify-between p-5'>
        <div>
          <p className='text-lg font-bold'>{post?.title}</p>
          <p className='text-xs py-2'>{`${post?.body.slice(0, 25)}...`}</p>
          <p className='text-xs italic'>By user id {post?.userId}</p>
        </div>
      </div>
    </div>
  );
};

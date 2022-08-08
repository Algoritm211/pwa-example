import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { useState } from "react";
import {api, Post} from "../api/posts";
import {CreatePostDto} from "../dto/createPost.dto";
import {QueryKeys} from "./constants";

export const useGetPosts = () => {
  return useQuery([QueryKeys.posts], api.getPosts);
}

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const [posts, setPosts] = useState<Post[] | undefined>([]);

  const {mutateAsync, isLoading} = useMutation(
    (post: CreatePostDto) => api.createPost(post),
    {
      onMutate: async () => {
        await queryClient.cancelQueries([QueryKeys.posts]);
        const previousData = queryClient.getQueryData<Post[]>([QueryKeys.posts]);

        // remove local state so that server state is taken instead
        setPosts([]);

        queryClient.setQueryData([QueryKeys.posts], [
          ...previousData!,
          ...posts!
        ]);

        console.log('PrevData', previousData)

        return previousData;
      },
      onSuccess(post) {
        // console.log(post)
      },
    },
  );

  return {isLoading, setPosts, mutateAsync}
};

export const useAddPost = () => {
  const {mutateAsync, isLoading, setPosts} = useCreatePost();

  const addPost = (post: CreatePostDto) => {
    return mutateAsync(post);
  }

  return { setPosts, addPost, isLoading }
}

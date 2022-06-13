import {useMutation, useQueryClient} from "react-query";
import {createPost, Post} from "../api/createPost";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (post: Omit<Post, 'id'>) => createPost(post),
    {
      onSuccess(post) {
        console.log(post)
      },
    },
  );
};

export const useAddPost = () => {
  const {data: post, mutateAsync, isLoading} = useCreatePost();

  const addPost = (post: Omit<Post, 'id'>) => {
    return mutateAsync(post);
  }

  return { post, addPost, isLoading }
}

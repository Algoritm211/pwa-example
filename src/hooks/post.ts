import {useMutation, useQueryClient} from "react-query";
import {createPost} from "../api/createPost";
import {CreatePostDto} from "../dto/createPost.dto";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (post: CreatePostDto) => createPost(post),
    {
      onSuccess(post) {
        console.log(post)
      },
    },
  );
};

export const useAddPost = () => {
  const {data: post, mutateAsync, isLoading} = useCreatePost();

  const addPost = (post: CreatePostDto) => {
    return mutateAsync(post);
  }

  return { post, addPost, isLoading }
}

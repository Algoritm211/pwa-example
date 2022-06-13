import {CreatePostDto} from "../dto/createPost.dto";

export interface Post {
  id: number,
  title: string,
  body: string,
  userId: number,
}

export const createPost = async (post: CreatePostDto): Promise<Post> => {
  const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const newPost = await rawResponse.json() as Promise<Post>;
  return newPost;
}

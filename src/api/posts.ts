import {CreatePostDto} from "../dto/createPost.dto";

export interface Post {
  id?: string,
  title: string,
  body: string,
  userId: string,
}

export class PostAPI {
  createPost = async (post: CreatePostDto): Promise<Post> => {
    const rawResponse = await fetch('http://localhost:5000/post', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const newPost = await rawResponse.json() as Promise<Post>;
    return newPost;
  }

  getPosts = async () => {
    const rawResponse = await fetch('http://localhost:5000/posts')
    return await rawResponse.json() as Promise<Post[]>;
  }
}

export const api = new PostAPI()

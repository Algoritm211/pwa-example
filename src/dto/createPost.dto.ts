import {Post} from "../api/createPost";

export type CreatePostDto = Omit<Post, 'id'>

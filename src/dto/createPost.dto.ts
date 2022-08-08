import {Post} from "../api/posts";

export type CreatePostDto = Omit<Post, 'id'>

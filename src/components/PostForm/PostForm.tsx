import React from 'react';
import {Field, Form } from 'react-final-form';
import {useAddPost, useGetPosts} from "../../hooks/post";

interface FormValues {
  title: string,
  body: string,
  userId: string,
}

const PostForm: React.FC = () => {
  const {setPosts, addPost} = useAddPost();

  const onPostSubmit = async (values: FormValues) => {
    setPosts((prev) => [...prev!, values])
    const newPost = await addPost(values);
    console.log('success');
    // alert(JSON.stringify(newPost, null, 2))
  }
  return (
    <Form<FormValues>
      onSubmit={onPostSubmit}
      render={({handleSubmit}) => {
        return (
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-700">Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Title"
                className="shadow border rounded py-2 px-3 mt-1 block w-full
            ring-yellow-500 focus:ring outline-none"
              />
            </div>
            <div>
              <label>Body</label>
              <Field
                name="body"
                component="textarea"
                placeholder="Body"
                className="shadow border rounded py-2 px-3 mt-1 block w-full
            ring-yellow-500 focus:ring outline-none"
              />
            </div>
            <div>
              <label>UserID</label>
              <Field
                name="userId"
                component="input"
                type="number"
                placeholder="User ID"
                className="shadow border rounded py-2 px-3 mt-1 block w-full
            ring-yellow-500 focus:ring outline-none"
              />
            </div>
            <div>
              <label>Upload Your Image</label>
              <Field
                name="preview"
                component="input"
                type="file"
                placeholder="Choose file"
                className="shadow border rounded py-2 px-3 mt-1 block w-full
            ring-yellow-500 focus:ring outline-none"
              />
            </div>
            <button
              className="text-white mt-3 bg-amber-500 hover:bg-amber-600
              rounded p-2 transition duration-500"
              type="submit">
              Submit form
            </button>
          </form>
        )
      }}
    />
  );
};

export default PostForm;

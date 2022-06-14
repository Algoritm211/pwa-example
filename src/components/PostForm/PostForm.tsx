import React from 'react';
import {Field, Form } from 'react-final-form';
import './PostForm.css'
import {useAddPost} from "../../hooks/post";

interface FormValues {
  title: string,
  body: string,
  userId: number,
}

const PostForm: React.FC = () => {
  const {post, addPost} = useAddPost();

  const onPostSubmit = async (values: FormValues) => {
    const newPost = await addPost(values);
    console.log('success');
    alert(JSON.stringify(newPost, null, 2))
  }
  return (
    <Form<FormValues>
      onSubmit={onPostSubmit}
      render={({handleSubmit}) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Title"
              />
            </div>
            <div>
              <label>Body</label>
              <Field
                name="body"
                component="textarea"
                placeholder="Body"
              />
            </div>
            <div>
              <label>UserID</label>
              <Field
                name="userId"
                component="input"
                type="number"
                placeholder="User ID"
              />
            </div>
            <button type="submit">
              Submit form
            </button>
          </form>
        )
      }}
    />
  );
};

export default PostForm;

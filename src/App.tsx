import React, {useEffect} from 'react';
import PostForm from "./components/PostForm/PostForm";
import { Posts } from './components/Posts/Posts';
import {Photos} from "./components/Photos/Photos";
import {PhotosForm} from "./components/PhotosForm/PhotosForm";


const App: React.FC = () => (
  <div className="grid justify-center mx-auto max-w-md lg:max-w-3xl">
    {/*<PostForm />*/}
    {/*<Posts />*/}
    <PhotosForm />
    <Photos />
  </div>
);

export default App;

import React, {useEffect} from 'react';
import PostForm from "./components/PostForm/PostForm";
import { Posts } from './components/Posts/Posts';


const App: React.FC = () => (
  <div className="grid justify-center mx-auto max-w-md lg:max-w-3xl">
    <PostForm />
    <Posts />
  </div>
);

export default App;

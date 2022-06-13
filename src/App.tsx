import React, {useEffect} from 'react';
import './App.css';
import PostForm from "./components/PostForm/PostForm";
import {store} from './indexedDBStorage';
import {createPost} from "./api/createPost";
import {CreatePostRequest} from "./service-worker";

const handleConnection = async () => {
  const requests = await store.getItem<CreatePostRequest[]>('offlineRequests');
  const wrappedRequests = requests!.map((request) => {
    return createPost(request.body);
  });

  const values = await Promise.all(wrappedRequests)
  console.log('All requests was sent succesfully', values);
  await store.setItem('offlineRequests', []);
}


function App() {
  useEffect(() => {
    window.addEventListener('online', handleConnection);
    return () => {
      window.removeEventListener('online', handleConnection);
    }
  }, [])

  return (
    <div className="container">
      <PostForm />
    </div>
  );
}

export default App;

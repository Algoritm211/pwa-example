import React from 'react';
import { useGetPhotos } from '../../hooks/photos';

export const Photos = () => {
  const {data} = useGetPhotos();

  if (!data) {
    return <div>Loading...</div>
  }

  const photosBlock = data.map((photo) => {
    return (
      <div key={photo.url}>
        <img alt="test" width="300" height="200" src={`${photo.url}`} />
      </div>
    )
  })

  return (
    <div className="grid py-5 place-content-center
    grid-cols-3 gap-1">
      {photosBlock}
    </div>
  );
};

import React from 'react';
import Item from './photoItem';

const PhotoList = (props) => {

  if (props.photos === []) {
    return <div>Loading...</div>
  }

console.log(props.photos);

  const photoItems = props.photos && props.photos.map((pic)=> {
      return (
        <Item
          key={pic.id}
          url={pic.urls.thumb}
        />
      );
    });

  return (
    <ul style={{listStyle:'none'}}>
          {photoItems}
    </ul>
  )
}

export default PhotoList;

import React from 'react';

function Thumbnail(props) {
  return (
      <img className='Thumbnail' src={props.imageSrc} onClick={props.clickHandler} />
  );
}

export default Thumbnail;

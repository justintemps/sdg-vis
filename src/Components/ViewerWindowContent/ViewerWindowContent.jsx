import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';

class ViewerWindowContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='viewerWindowContent'>
        <Carousel />
      </div>
    );
  }
}

export default ViewerWindowContent;

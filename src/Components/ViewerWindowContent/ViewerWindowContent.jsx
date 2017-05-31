import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';

class ViewerWindowContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
  }

  render() {
    return (
      <div className='viewerWindowContent'>
        <Carousel {...this.props}/>
      </div>
    );
  }
}

export default ViewerWindowContent;

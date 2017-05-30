import React from 'react';
import Slider from 'react-slick';
import videos from '!json-loader!../../videos.json';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      centerMode: true,
      centerPadding: '20px',
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  }

  render() {
    return (
      <Slider {...this.settings}>
        <div><img src="http://placekitten.com/g/300/200" /></div>
        <div><img src="http://placekitten.com/g/300/200" /></div>
        <div><img src="http://placekitten.com/g/300/200" /></div>
      </Slider>
    );
  }
}

export default Carousel;

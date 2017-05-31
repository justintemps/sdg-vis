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
    if (this.props.videos.length !== 0) {
      return (
        <Slider {...this.settings}>
          {this.props.videos.filter(vid => vid.sdg === this.props.currentSdg.toString()).map(vid => (
            <div key={vid.youtubeID}>
              <img className="thumbnail" src={vid.thumbnail} />
            </div>
          ))}
        </Slider>
      );
    } else {
      return null;
    }
  }
}

export default Carousel;

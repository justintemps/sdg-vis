import React from 'react';
import PropTypes from 'prop-types';
import Triangle from '../Triangle/Triangle.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import svg from '!file-loader!../../images/sdg0.svg';

class Icon extends React.Component {
  constructor() {
    super();
    this.opacity = this.opacity.bind(this);
    this.triangle = this.triangle.bind(this);
  }

  opacity() {
    if (this.props.sdgNumber === this.props.currentSdg) {
      return { opacity: 1 };
    }
  }

  triangle() {
    if (this.props.sdgNumber === this.props.currentSdg) {
      return (
        <Triangle
          className="triangle"
          key={this.props.number}
          small={true}
          sdgNumber={this.props.number}
          sdgColor={this.props.color}
        />
      );
    }
  }

  render() {
    console.log(svg);
    return (
      <div className="icon-wrapper">
        <div
          style={this.opacity()}
          className={`icon sdg${this.props.sdgNumber}`}
        >
          <img src={svg} />
        </div>
        <ReactCSSTransitionGroup
          transitionName="little-triangle"
          transitionLeaveTimeout={1}
          transitionEnterTimeout={this.props.rowChanged ? 750 : 1}
        >
          {this.triangle()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Icon.propTypes = {
  currentSdg: PropTypes.number.isRequired,
  sdgNumber: PropTypes.number.isRequired,
  number: PropTypes.number,
  color: PropTypes.string.isRequired,
  rowChanged: PropTypes.bool.isRequired
};

export default Icon;

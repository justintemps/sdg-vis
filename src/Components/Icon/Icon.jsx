/**
 * Icons
 * Child to Row
*/

import React from 'react';
import Triangle from '../Triangle/Triangle.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import globalGoalsSVG from '!babel!svg-react!../../images/gglogo.svg';

// Global Goals Logo for SDG0 for mobile view
const gglogo = React.createElement(globalGoalsSVG);

const Icon = React.createClass({
  clickHandler() {
    this.props.selectSDG(this.props.sdgNumber);
  },

  render() {
    // Configure the class for the icon
    const iconClass = `icon sdg${this.props.sdgNumber}`;

    // Sets the opacity on the currently selected element
    const opacity = () => {
      if (this.props.sdgNumber === this.props.currentSdg) {
        return { opacity: 1 };
      }
    };

    const triangle = () => {
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
    };

    // Determines which number or character should appear in the mobile icon
    const mobileSDGNumber = this.props.sdgNumber > 0
      ? this.props.sdgNumber
      : gglogo;

    return (
      <div className="icon-wrapper">
        <div
          style={opacity()}
          className={iconClass}
          onClick={this.clickHandler}
        >
          {this.props.icon}
        </div>
        <ReactCSSTransitionGroup
          transitionName="little-triangle"
          transitionLeaveTimeout={1}
          transitionEnterTimeout={this.props.rowChanged ? 750 : 1}
        >
          {triangle()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Icon;

/**
 * Icons
 * Child to Row
*/

import React from "react";
import Triangle from "../Triangle/Triangle.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Icon = React.createClass({

	clickHandler() {
		this.props.handler(this.props.sdg);
	},

	render() {

//		const sdgs = this.props.icons;

		// Configure the class for the icon
		const iconClass = `icon sdg${this.props.sdg}`;

		// Sets the opacity on the currently selected element
		const opacity = () => {
			if (this.props.sdg === this.props.currentSdg) {
				return({opacity: 1});
			}
		};

		const triangle = () => {
			if (this.props.sdg === this.props.currentSdg) {
				return <Triangle className="triangle" key={this.props.number} small={true} sdgNumber={this.props.number} sdgColor={this.props.color} />;
			}
		};

		// Global Goals logo appears in first icon of mobile view
		const gglogo = <img src="src/images/gglogo.svg" />;

		// Determines which number or character should appear in the mobile icon
		const mobileSDGNumber = ( this.props.sdg > 0 ) ? this.props.sdg : gglogo;

		return(
			<div className="icon-wrapper">
				<div style={opacity()} className={iconClass} onClick={this.clickHandler}>
					{this.props.icon}
					<div className="mobileSdgNumber">{mobileSDGNumber}</div>
					<div className="mobileSdgName">{this.props.sdgNameShort}</div>
				</div>
				<ReactCSSTransitionGroup transitionName="little-triangle" transitionLeaveTimeout={1} transitionEnterTimeout={this.props.rowChanged ? 750 : 1}>
					{triangle()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

export default Icon;

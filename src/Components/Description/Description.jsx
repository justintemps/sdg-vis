/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Tooltip from "../Tooltip/Tooltip.jsx";
import hexToRgb from "./hexToRgb.js";

const Description = React.createClass({

	showLongDescription() {
		this.props.setLongDescription(true);
	},

	mobiledescription(limit, range) {

		const diff = this.props.description.length - limit;

		if (diff < range) {
			return this.props.description;
		} else if (this.props.longDescription) {
			return this.props.description;
		} else {
			return (
				<span>
					{this.props.description.slice(0, limit)}
					<span className="more" onClick={this.showLongDescription}></span>
				</span>
			);
		}
	},

	buttonColor() {
		return {backgroundColor : this.props.color};
	},

	tooltipColor() {
		return {backgroundColor: hexToRgb(this.props.color, 0.8)};
	},


	sdgTarget() {
		return (
			<div className="sdgtarget" style={this.buttonColor()}> See target {this.props.targetNumber}
			</div>
		);
	},

	render() {
		return(
			<div className="description">
				<Tooltip style={this.tooltipColor()} description={this.props.description}></Tooltip>
				<p className="target-description">{this.props.description}</p>
				{this.sdgTarget()}
				<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
			</div>
		);
	}
});

export default Description;

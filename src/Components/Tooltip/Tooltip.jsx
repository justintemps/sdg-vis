/**
 * Tooltip
 * Child to viewerWindowContent
 */

 import React from "react";
 import hexToRgb from "./hexToRgb.js";

 const Tooltip = React.createClass({

	styles() {
		const bgColor = hexToRgb(this.props.currentColor, 0.9);

		if (this.props.toolTipVisible) {
			return {
				opacity: 1,
				transform: "translateY(0)",
				visibility: "visible",
				backgroundColor: bgColor
			};
		} else {
			return {
				opacity: 0,
				transform: "translateY(10px)",
				visibility: "hidden",
				backgroundColor: bgColor
			};
		}
	},

/*
	showToolTip: {
		opacity: 1,
		transform: "translateY(0)",
		visibility: "visible",
		backgroundColor: this.bgColor()
	},

	hideToolTip: {
		opacity: 0,
		transform: "translateY(10px)",
		visibility: "hidden",
		backgroundColor: this.bgColor()
	},
*/
	render() {

		return(
			<div style={this.styles()}
				className="tooltip">
				{this.props.focusTargets[this.props.focusTarget].description}
			</div>
		);
	}
 });

 export default Tooltip;

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

	matchingILS() {
		const matchingILS = this.props.ils.find(
			ils => ils.number === this.props.focusTargets[this.props.focusTarget].number
		);
		return matchingILS;
	},

	render() {
		if (this.props.ilsInToolTip === false) {
			return (
				<div style={this.styles()} className="tooltip">
					<div className="target-number">Target {this.props.focusTargets[this.props.focusTarget].number}
					</div>
					{this.props.focusTargets[this.props.focusTarget].description}
				</div>
			);
		} else {
			return (
				<div style={this.styles()} className="tooltip">
					<div className="target-number">
						{this.matchingILS().title}
					</div>
					{this.matchingILS().description}
				</div>
			);
		}
	}
});

export default Tooltip;

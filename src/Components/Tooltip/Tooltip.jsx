/**
 * Tooltip
 * Child to viewerWindowContent
 */

 import React from "react";

 const Tooltip = React.createClass({

	showToolTip: {
		visibility: "visible"
	},

	hideToolTip: {
		visibility: "hidden"
	},

	render() {
		return(
			<div style={this.props.toolTipVisible ? this.showToolTip : this.hideToolTip}
				className="tooltip">
				{this.props.focusTargets[this.props.focusTarget].description}
			</div>
		);
	}
 });

 export default Tooltip;

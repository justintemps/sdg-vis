/**
 * Tooltip
 * Child to Description
 */

 import React from "react";

 const Tooltip = React.createClass({
	render() {
		return(
			<div className="tooltip">{this.props.description}</div>
		);
	}
 });

 export default Tooltip;

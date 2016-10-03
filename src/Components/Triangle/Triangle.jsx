/**
 * Triangle
 * Child of TitleBar, Icon
 */

 import React from "react";

 const Triangle = React.createClass({

	size() {
		return this.props.small ? 15 : 20;
	},

	render() {
		const properties = {
			borderLeft: `${this.size()}px solid transparent`,
			borderRight: `${this.size()}px solid transparent`,
			borderTop: `${this.size()}px solid ${this.props.sdgColor}`
		};

		return(
			<div className={this.props.small ? "small-triangle" : "triangle"}
				style={properties}>
			</div>
		);
	}
 });

 export default Triangle;

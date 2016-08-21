/**
 * Triangle
 * Child of TitleBar, Icon
 */

 import React from "react";

 const Triangle = React.createClass({

	render() {

		const triangle = {
			borderLeft: `${this.props.size}px solid transparent`,
			borderRight: `${this.props.size}px solid transparent`,
			borderTop: this.props.sdgNumber > 0 ? `${this.props.size}px solid ${this.props.sdgColor}` : `${this.props.size}px solid #37468E`,
			content: "",
			display: "block",
			margin: "2px 0",
			position: "relative",
			height: 0,
			transition: "border-top 500ms ease",
			width: 0
		};

		return(
			<div className="triangle" style={triangle}></div>
		);
	}
 });


 export default Triangle;

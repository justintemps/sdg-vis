import React from "react";
import data from "!json!../../data.json";
import "./titleBar.scss";

const TitleBar = React.createClass({

	render() {

		const color = {
			backgroundColor : this.props.sdgColor
		};

		const triangle = {
			borderLeft: "20px solid transparent",
			borderRight: "20px solid transparent",
			borderTop: `20px solid ${this.props.sdgColor}`,
			content: "",
			display: "block",
			margin: "2px 0",
			position: "relative",
			height: 0,
			width: 0
		};

		return(
			<div>
				<div className="titleBar" style={color}>
					<div className="sdgNumber">
						{this.props.sdgNumber}
					</div>
					<div className="sdgName">
						{this.props.sdgName}
					</div>
				</div>
				<div style={triangle}></div>
			</div>
		);
	}
});

export default TitleBar;

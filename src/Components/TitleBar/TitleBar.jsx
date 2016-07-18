import React from "react";
import data from "!json!../../data.json";
import "./titleBar.scss";

const TitleBar = React.createClass({

	render() {

		const color = {
			backgroundColor : this.props.sdgColor,
			transition: "background-color 0.2s ease"
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
			transition: "background-color 0.2s ease",
			width: 0
		};

		// Titlebar to display for the SDGs
		if (this.props.sdgNumber > 0) {
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

		// Titlebar to display for the Intro Screen
		} else {
			return(
				<div>
					<div className="titleBar" style={color}>
						<div className="dropCap">
							D
						</div>
						<div className="decentWork">
							ECENT WORK
						</div>
						<div className="sdgBlurb">
							{this.props.sdgName}
						</div>
					</div>
					<div style={triangle}></div>
				</div>
			);
		}
	}
});

export default TitleBar;

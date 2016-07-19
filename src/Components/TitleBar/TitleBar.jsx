import React from "react";
import "./titleBar.scss";

const TitleBar = React.createClass({

	render() {

		const color = {
			// Get titlebar color from data model, unless it's the intro screen
			backgroundColor : (this.props.sdgNumber > 0) ? this.props.sdgColor : "#f1f1f1",
			transition: "background-color 0.2s ease"
		};

		const triangle = {
			borderLeft: "20px solid transparent",
			borderRight: "20px solid transparent",
			// Get triangle color from data model, unless it's the intro screen
			borderTop: (this.props.sdgNumber > 0) ? `20px solid ${this.props.sdgColor}` : "20px solid #f1f1f1",
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
							d
						</div>
						<div className="decentWork">
							ecent work
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

/**
 * TitleBar
 * Child of ViewerWindow
 */

import React from "react";

const TitleBar = React.createClass({

	isMobile() {
		if (this.props.getVPwidth() > 640 ) {
			return false;
		} else {
			return true;
		}
	},

	// Determine background color based on m
	setBackgroundColor() {
		if ( this.isMobile() ) {
			return "#fff";
		} else if (this.props.sdgNumber > 0 ) {
			return this.props.sdgColor;
		} else {
			return "#f1f1f1";
		}
	},

	setColor() {
		if ( this.isMobile() ) {
			return this.props.sdgColor;
		} else if (this.props.sdgNumber > 0 ) {
			return "#fff";
		} else {
			return this.props.sdgColor;
		}
	},

	render() {

		const bgcolor = {
			// Get titlebar color from data model, unless it's the intro screen
			// backgroundColor : (this.props.sdgNumber > 0) ? this.props.sdgColor : "#f1f1f1",
			backgroundColor: this.setBackgroundColor(),
			transition: "background-color 0.2s ease"
		};

		const color = {
			color: this.setColor(),
			transition: "color 0.2s ease"
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
					<div className="titleBar" style={bgcolor}>
						<div className="sdgNumber" style={color}>
							{this.props.sdgNumber}
						</div>
						<h1 style={color}>
							{this.props.sdgName}
						</h1>
					</div>
					<div style={color} className="triangle" style={triangle}></div>
				</div>
			);

		// Titlebar to display for the Intro Screen
		} else {
			return(
				<div>
					<div className="titleBar" style={bgcolor}>
						<div className="dropCap" style={color}>
							d
						</div>
						<div className="decentWork" style={color} >
							ecent work
						</div>
						<div className="sdgBlurb" style={color} >
							{this.props.sdgName}
						</div>
					</div>
					<div className="triangle" style={triangle}></div>
				</div>
			);
		}
	}
});

export default TitleBar;

/**
 * TitleBar
 * Child of ViewerWindow
 * TODO: Don't inject styles dynamically, just use sass to change up the colors
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

	// Determine background color based on screenwidth
	setBackgroundColor() {
		if ( this.isMobile() ) {
			return "#fff";
		} else if (this.props.sdgNumber > 0 ) {
			return this.props.sdgColor;
		} else {
			return "#37468E";
		}
	},

	// Determine background color based on screenwidth
	setColor() {
		if ( this.isMobile() ) {
			return this.props.sdgColor;
		} else {
			return "#fff";
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
			borderTop: (this.props.sdgNumber > 0) ? `20px solid ${this.props.sdgColor}` : "20px solid #37468E",
			content: "",
			display: "block",
			margin: "2px 0",
			position: "relative",
			height: 0,
			transition: "background-color 0.2s ease",
			width: 0
		};

		const titleClass = `title-sdg-${this.props.sdgNumber}`;

		const sdgcol = `sdgcol-${this.props.sdgNumber}`;

		// Titlebar to display for the SDGs
		if (this.props.sdgNumber > 0) {
			return(
				<div>
					<div className={`titleBar ${titleClass}`}>
						<div className={`sdgNumber ${sdgcol}`}>
							{this.props.sdgNumber}
						</div>
						<h1 className={sdgcol} >
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
					<div className={`titleBar ${titleClass}`}>
						<h1 className="defaultTitle">
							ILO and the Sustainable Develpment Goals
						</h1>
					</div>
					<div className="triangle" style={triangle}></div>
				</div>
			);
		}
	}
});

export default TitleBar;

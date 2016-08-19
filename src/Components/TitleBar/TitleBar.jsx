/**
 * TitleBar
 * Child of ViewerWindow
 * TODO: Don't inject styles dynamically, just use sass to change up the colors
 */

import React from "react";

const TitleBar = React.createClass({

	render() {

		const color = {
			color: this.props.sdgColor,
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
							ILO and the Sustainable Development Goals
						</h1>
					</div>
					<div className="triangle" style={triangle}></div>
				</div>
			);
		}
	}
});

export default TitleBar;

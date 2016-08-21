/**
 * TitleBar
 * Child of ViewerWindow
 */

import React from "react";
import Triangle from "../Triangle/Triangle.jsx";

const TitleBar = React.createClass({

	render() {

		const color = {
			color: this.props.sdgColor,
			transition: "color 0.2s ease"
		};
/*
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
			transition: "border-top 500ms ease",
			width: 0
		};
*/
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
					<Triangle size={20} sdgNumber={this.props.sdgNumber} sdgColor={this.props.sdgColor} />
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
					<Triangle size={20} sdgNumber={this.props.sdgNumber} sdgColor={this.props.sdgColor} />
				</div>
			);
		}
	}
});

export default TitleBar;

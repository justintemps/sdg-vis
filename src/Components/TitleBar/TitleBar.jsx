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

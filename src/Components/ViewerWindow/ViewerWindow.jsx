/**
 * ViewerWindow
 * Parent to TitleBar, ViewerWindowContent
 */

import React from "react";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import IntroWindow from "../IntroWindow/IntroWindow.jsx";
import "./viewerWindow.scss";

const ViewerWindow = React.createClass({

	render() {

		const titleBar = <TitleBar
			sdgNumber={this.props.data[this.props.currentSdg].sdgNumber}
			sdgName={this.props.data[this.props.currentSdg].sdgName}
			sdgColor= {this.props.data[this.props.currentSdg].sdgColor}
		/>;

		// If the currentSDG is not the Intro, render the viewerwindow like this
		if (this.props.currentSdg !== 0) {
			return(
				<div className="viewerWindow">
					{titleBar}
					<ViewerWindowContent
						sdgNumber={this.props.currentSdg}
						focusTarget={this.props.focusTarget}
						selectFocusTarget={this.props.selectFocusTarget}
						currentStory={this.props.currentStory}
						selectStory={this.props.selectStory}
						data={this.props.data}
					/>
				</div>
			);

		// Default: if the currentSDG is the Intro, render the viewerwindow like this.
		} else {
			return(
				<div className="viewerWindow">
					{titleBar}
					<IntroWindow />
				</div>
			);
		}
	}
});

export default ViewerWindow;

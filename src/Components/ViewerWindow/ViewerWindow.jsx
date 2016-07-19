/**
 * ViewerWindow
 * Parent to TitleBar, ViewerWindowContent
 */

import React from "react";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import "./viewerWindow.scss";

const ViewerWindow = React.createClass({

	render() {
		return(
			<div className="viewerWindow">
				<TitleBar
					sdgNumber={this.props.data[this.props.currentSdg].sdgNumber}
					sdgName={this.props.data[this.props.currentSdg].sdgName}
					sdgColor= {this.props.data[this.props.currentSdg].sdgColor}
				/>
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
	}
});

export default ViewerWindow;

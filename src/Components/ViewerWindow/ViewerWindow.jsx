import React from "react";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import "./viewerWindow.scss";

const ViewerWindow = React.createClass({

	render() {
		return(
			<div className="viewerWindow">
				<TitleBar
					sdgNumber={this.props.data[this.props.sdg].sdgNumber}
					sdgName={this.props.data[this.props.sdg].sdgName}
					sdgColor= {this.props.data[this.props.sdg].sdgColor}
				/>
				<ViewerWindowContent
					sdgNumber={this.props.sdg}
					focusTarget={this.props.focusTarget}
					selectFocusTarget={this.props.selectFocusTarget}
					currentStory={this.props.currentStory}
					selectStory={this.props.selectStory}
				/>
			</div>
		);
	}
});

export default ViewerWindow;

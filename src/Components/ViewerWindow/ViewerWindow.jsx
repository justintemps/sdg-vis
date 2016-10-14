/**
 * ViewerWindow
 * Parent to TitleBar, ViewerWindowContent
 */

import React from "react";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";

const ViewerWindow = React.createClass({

	render() {
		const titleBar = <TitleBar
			sdgNumber={this.props.data[this.props.currentSdg].sdgNumber}
			sdgName={this.props.data[this.props.currentSdg].sdgName}
			sdgColor= {this.props.data[this.props.currentSdg].sdgColor}
			getVPwidth={this.props.getVPwidth}
		/>;

		return (
			<div className="viewerWindow">
				{titleBar}
				<ViewerWindowContent {...this.props} />
			</div>
		);
	}
});

export default ViewerWindow;

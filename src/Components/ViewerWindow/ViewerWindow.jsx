import React from "react";
import data from "!json!../../data.json";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import "./viewerWindow.scss";

const ViewerWindow = React.createClass({

	render() {
		return(
			<div className="viewerWindow">
				<TitleBar sdgNumber={data[this.props.sdg].sdgNumber} sdgName={data[this.props.sdg].sdgName} sdgColor= {data[this.props.sdg].sdgColor} />
				<ViewerWindowContent sdgNumber={this.props.sdg} focusTarget={this.props.focusTarget} selectFocusTarget={this.props.selectFocusTarget} />
			</div>
		);
	}
});

export default ViewerWindow;

import React from "react";
import data from "!json!../../data.json";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import "./viewerWindow.scss";

const ViewerWindow = React.createClass({

	render() {
		return(
			<div className="viewerWindow">
				<TitleBar sdgNumber={data[this.props.selected].sdgNumber} sdgName={data[this.props.selected].sdgName} sdgColor= {data[this.props.selected].sdgColor} />
				<ViewerWindowContent />
			</div>
		);
	}
});

export default ViewerWindow;

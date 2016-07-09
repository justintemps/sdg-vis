import React from "react";
import data from "!json!../../data.json";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";

const ViewerWindow = React.createClass({
	render() {
		return(
			<div className="viewerWindow">
				<TitleBar sdgNumber={data[7].sdgNumber} sdgName={data[7].sdgName} />
				<ViewerWindowContent />
			</div>
		);
	}
});

export default ViewerWindow;

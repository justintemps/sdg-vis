import React from "react";
import data from "!json!../../data.json";
import FocusTargets from "../FocusTargets/FocusTargets.jsx";

const ViewerWindowContent = React.createClass({
	render() {

		const focusTargets = data[7].focusTargets.map( (focusTargets) => {
			return (
				focusTargets.description
			);
		});

		return (
			<div className="viewerWindowContent">
				<FocusTargets focusTargets={focusTargets} />
			</div>
		);
	}
});

export default ViewerWindowContent;

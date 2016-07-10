import React from "react";
import data from "!json!../../data.json";
import FocusTargets from "../FocusTargets/FocusTargets.jsx";
import ImpactStories from "../ImpactStories/ImpactStories.jsx";

const ViewerWindowContent = React.createClass({
	render() {

		const focusTargets = data[7].focusTargets.map( (target) => {
			return (
				target.description
			);
		});

		const impactStories = data[7].stories.map( (story) => {
			return (
			{
				title : story.title,
				blurb : story.blurb,
				url : story.url,
				imageUrl : story.imageUrl
			});
		});

		return (
			<div className="viewerWindowContent">
				<FocusTargets focusTargets={focusTargets} />
				<ImpactStories impactStories={impactStories}/>
			</div>
		);
	}
});

export default ViewerWindowContent;

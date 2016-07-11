import React from "react";
import data from "!json!../../data.json";
import FocusTargets from "../FocusTargets/FocusTargets.jsx";
import ImpactStories from "../ImpactStories/ImpactStories.jsx";

const ViewerWindowContent = React.createClass({
	render() {

		const focusTargets = data[this.props.sdgNumber].focusTargets.map( (target) => {
			return (
				target.description
			);
		});

		const impactStories = data[this.props.sdgNumber].stories.map( (story) => {
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
				<FocusTargets
					focusTargets={focusTargets}
					focusTarget={this.props.focusTarget}
					selectFocusTarget={this.props.selectFocusTarget}
				/>
				<ImpactStories
					impactStories={impactStories}
					currentStory={this.props.currentStory}
					selectStory={this.props.selectStory}
				/>
			</div>
		);
	}
});

export default ViewerWindowContent;

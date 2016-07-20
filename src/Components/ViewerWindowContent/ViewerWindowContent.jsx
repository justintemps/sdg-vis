/**
 * ViewerWindowContent
 * Parent to FocusTargets, ImpactStories
 */

import React from "react";
import FocusTargets from "../FocusTargets/FocusTargets.jsx";
import ImpactStories from "../ImpactStories/ImpactStories.jsx";

const ViewerWindowContent = React.createClass({
	render() {

		// Get the focus targets number and description for the current SDG
		const focusTargets = this.props.data[this.props.sdgNumber].focusTargets.map( target =>
			({ description : target.description, number : target.number })
		);

		// Get the impact stories data for the current SDG
		const impactStories = this.props.data[this.props.sdgNumber].stories.map( story => {
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
					currentSDG = {this.props.sdgNumber}
					data = {this.props.data}
				/>
				<ImpactStories
					impactStories={impactStories}
					currentStory={this.props.currentStory}
					selectStory={this.props.selectStory}
					currentSDG = {this.props.sdgNumber}
					data = {this.props.data}
				/>
			</div>
		);
	}
});

export default ViewerWindowContent;

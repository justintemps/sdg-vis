/**
 * ViewerWindowContent
 * Parent to FocusTargets, ImpactStories
 */

import React from "react";
import DefaultViewerWindowContent from "./DefaultViewerWindowContent.jsx";
import FocusTargets from "../FocusTargets/FocusTargets.jsx";
import ImpactStories from "../ImpactStories/ImpactStories.jsx";
import Tooltip from "../Tooltip/Tooltip.jsx";

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

		// If current SDG is 0, show the default screen, otherwise show Focus Targets, Impact Stories
		if (this.props.sdgNumber === 0 ) {
			return <DefaultViewerWindowContent />;
		} else {
			return (
				<div className="viewerWindowContent">
					<FocusTargets
						focusTargets={focusTargets}
						focusTarget={this.props.focusTarget}
						selectFocusTarget={this.props.selectFocusTarget}
						currentSDG = {this.props.sdgNumber}
						data = {this.props.data}
						longDescription={this.props.longDescription}
						setLongDescription={this.props.setLongDescription}
						toggleToolTip={this.props.toggleToolTip}
						toolTipVisible={this.props.toolTipVisible}
					/>

					<Tooltip
						toolTipVisible={this.props.toolTipVisible}
						focusTargets={focusTargets}
						focusTarget={this.props.focusTarget}
						currentSDG = {this.props.sdgNumber}
						currentColor={this.props.data[this.props.sdgNumber].sdgColor}
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
	}
});

export default ViewerWindowContent;

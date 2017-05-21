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
		const focusTargets = this.props.data[this.props.currentSdg].focusTargets.map( target =>
			({ description : target.description, number : target.number })
		);

		const iloTargets = this.props.data[this.props.currentSdg].iloTargets.map( target =>
			({ description : target.description, number : target.number })
		);

		// Get the impact stories data for the current SDG
		const impactStories = this.props.data[this.props.currentSdg].stories.map( story => {
			return (
			{
				title : story.title,
				blurb : story.blurb,
				url : story.url,
				imageUrl : story.imageUrl
			});
		});

		// If current SDG is 0, show the default screen, otherwise show Focus Targets, Impact Stories
		if (this.props.currentSdg === 0 ) {
			return (
				<DefaultViewerWindowContent
					isModalOpen={this.props.isModalOpen}
					openModal={this.props.openModal}
					closeModal={this.props.closeModal}
				/>
			);
		} else {
			return (
				<div className="viewerWindowContent">

					<Tooltip
						toolTipVisible={this.props.toolTipVisible}
						focusTargets={focusTargets}
						focusTarget={this.props.focusTarget}
						currentColor={this.props.data[this.props.currentSdg].sdgColor}
					/>

					<ImpactStories
						impactStories={impactStories}
						currentStory={this.props.currentStory}
						selectStory={this.props.selectStory}
						currentSdg = {this.props.currentSdg}
						data = {this.props.data}
					/>
				</div>
			);
		}
	}
});

export default ViewerWindowContent;

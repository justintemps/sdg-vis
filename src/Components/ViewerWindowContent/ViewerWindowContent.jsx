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

	// Get the actual SDG targets for this SDG
	focusTargets() {
		const focusTargets = this.props.data[this.props.currentSdg].focusTargets.map( target =>
			({ description : target.description, number : target.number })
		);
		return focusTargets;
	},

	// Get the ILO wording of the SDG targets
	iloTargets() {
		const iloTargets = this.props.data[this.props.currentSdg].iloTargets.map( target =>
			({ description : target.description, number : target.number })
		);
		return iloTargets;
	},

	// Get ils if it's there!
	ils() {
		let ils = [];
		if (this.props.data[this.props.currentSdg].ils) {
			ils = this.props.data[this.props.currentSdg].ils.map ( ils =>
				({title: ils.title, description : ils.description, number : ils.number})
			);
		}
		return ils;
	},

	// Get the list of stories associated with that target
	impactStories() {
		const impactStories = this.props.data[this.props.currentSdg].stories.map( story => {
			return (
			{
				title : story.title,
				blurb : story.blurb,
				url : story.url,
				imageUrl : story.imageUrl
			});
		});
		return impactStories;
	},

	render() {

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

					<FocusTargets
						iloTargets={this.iloTargets()}
						focusTarget={this.props.focusTarget}
						ils={this.ils()}
						selectFocusTarget={this.props.selectFocusTarget}
						currentSdg = {this.props.currentSdg}
						data = {this.props.data}
						longDescription={this.props.longDescription}
						setLongDescription={this.props.setLongDescription}
						toggleToolTip={this.props.toggleToolTip}
						toolTipVisible={this.props.toolTipVisible}
						showIlsInToolTip={this.props.showIlsInToolTip}
					/>

					<Tooltip
						toolTipVisible={this.props.toolTipVisible}
						focusTargets={this.focusTargets()}
						focusTarget={this.props.focusTarget}
						currentColor={this.props.data[this.props.currentSdg].sdgColor}
						ils={this.ils()}
						ilsInToolTip={this.props.ilsInToolTip}
					/>

					<ImpactStories
						impactStories={this.impactStories()}
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

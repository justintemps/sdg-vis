/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";

const Description = React.createClass({

	showLongDescription() {
		this.props.setLongDescription(true);
	},

	mobiledescription(limit) {

		if (this.props.description.length < limit) {
			return this.props.description;
		} else if (this.props.longDescription) {
			return this.props.description;
		} else {
			return (
				<p>
				{this.props.description.slice(0, limit)}
				<span className="more" onClick={this.showLongDescription}></span>
				</p>
			);
		}
	},

	render() {
		return(
			<div>
				<p className="target-description">{this.props.description}</p>
				<p className="mobile-target-description">{this.mobiledescription(155)}</p>
			</div>
		);
	}
});

export default Description;

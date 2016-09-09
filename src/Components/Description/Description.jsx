/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";

const Description = React.createClass({

	showLongDescription() {
		this.props.setLongDescription(true);
	},

	mobiledescription(limit, range) {

		const diff = this.props.description.length - limit;

		if (diff < range) {
			return this.props.description;
		} else if (this.props.longDescription) {
			return this.props.description;
		} else {
			return (
				<span>
					{this.props.description.slice(0, limit)}
					<span className="more" onClick={this.showLongDescription}></span>
				</span>
			);
		}
	},

	buttonColor() {
		return {backgroundColor : this.props.color};
	},

	showToolTip() {
		this.props.toggleToolTip(true);
	},

	hideToolTip() {
		this.props.toggleToolTip(false);
	},

	render() {
		return(
			<div className="description">
				<p className="target-description">{this.props.description}</p>
					<div className="sdgtarget" style={this.buttonColor()} onMouseEnter={this.showToolTip} onMouseLeave={this.hideToolTip}>
						See target {this.props.targetNumber}
					</div>
				<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
			</div>
		);
	}
});

export default Description;

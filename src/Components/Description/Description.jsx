/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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

	render() {
		return(
			<div>
				<ReactCSSTransitionGroup transitionName="carousel" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					<p className="target-description" key={this.props.focusTarget}>{this.props.description}</p>
					<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

export default Description;

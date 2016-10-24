/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";

const Description = React.createClass({

	propTypes: {
		setLongDescription : React.PropTypes.func.isRequired,
		toggleToolTip : React.PropTypes.func.isRequired,
	},

	showLongDescription() {
		this.props.setLongDescription(true);
	},

	showToolTip() {
		this.props.toggleToolTip(true);
	},

	hideToolTip() {
		this.props.toggleToolTip(false);
	},

	seeTargetButton() {
		return (
			<span
				style={ ( () => ({ color : this.props.color }) )() }
				onTouchStart={this.showToolTip}
				onMouseOver={this.showToolTip}
				onMouseLeave={this.hideToolTip}
			>
				SDG Target {this.props.targetNumber}
			</span>
		);
	},

	seeILSButton() {
		if (this.props.ils) {
			const match = this.props.ils.filter( ils => ils.number === this.props.targetNumber );

			if (match) {
				return(
					<span
						style={ ( () => ({ color : this.props.color }) )() }
						onTouchStart={this.showToolTip}
						onMouseOver={this.showToolTip}
						onMouseLeave={this.hideToolTip}
					>
					See related ILO Standards
					</span>
				);
			}
		}
	},

	mobiledescription(limit, range) {
		const diff = this.props.description.length - limit;

		if (diff < range || this.props.longDescription) {
			return(
				<span>
					{this.props.description} {this.seeTargetButton()}}
				</span>
			);
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
			<div className="description">
				<p className="target-description">{this.props.description}{this.seeTargetButton()}{this.seeILSButton()}</p>
				<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
			</div>
		);
	}
});

export default Description;

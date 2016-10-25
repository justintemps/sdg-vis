/**
 * Description
 * Child to FocusTargets, ImpactStories
 */

import React from "react";

const ToolTipButtons = React.createClass({

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

			if (match.length > 0) {
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

	render() {
		return(
			<div>
				{this.seeTargetButton()}
				{this.seeILSButton()}
			</div>
		);
	}
});

const Description = React.createClass({

	propTypes: {
		setLongDescription : React.PropTypes.func.isRequired,
		toggleToolTip : React.PropTypes.func.isRequired,
	},

	showLongDescription() {
		this.props.setLongDescription(true);
	},

	mobiledescription(limit, range) {
		const diff = this.props.description.length - limit;

		if (diff < range || this.props.longDescription) {
			return(
				<span>
					{this.props.description}
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

				<p className="target-description">
					{this.props.description}
				</p>

				<ToolTipButtons
					toggleToolTip={this.props.toggleToolTip}
					ils={this.props.ils}
					color={this.props.color}
					targetNumber={this.props.targetNumber}
				/>

				<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
			</div>
		);
	}
});

export default Description;

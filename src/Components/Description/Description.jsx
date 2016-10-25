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
					showIlsInToolTip={this.props.showIlsInToolTip}
				/>

				<p className="mobile-target-description">{this.mobiledescription(100, 50)}</p>
			</div>
		);
	}
});


/**
 * TOOLTIP BUTTONS
 * Shows SDG Targets and related ILS where applicable
 * Child of Description
*/

const ToolTipButtons = React.createClass({

	propTypes: {
		toggleToolTip : React.PropTypes.func.isRequired,
		color : React.PropTypes.string.isRequired,
		targetNumber : React.PropTypes.string.isRequired,
		ils : React.PropTypes.array.isRequired
	},

	seeTarget() {
		this.props.showIlsInToolTip(false);
		this.props.toggleToolTip(true);
	},

	seeILS() {
		this.props.showIlsInToolTip(true);
		this.props.toggleToolTip(true);
	},

	hideToolTip() {
		this.props.toggleToolTip(false);
	},

	seeTargetButton() {
		return (
			<span
				style={ ( () => ({ color : this.props.color }) )() }
				onTouchStart={this.seeTarget}
				onMouseOver={this.seeTarget}
				onMouseLeave={this.hideToolTip}
			>
				SDG Target {this.props.targetNumber}
			</span>
		);
	},

	seeILSButton() {
		if (this.props.ils.length > 0) {

			const match = this.props.ils.filter( ils => ils.number === this.props.targetNumber );

			if (match.length > 0) {
				return (
					<span
						style={ ( () => ({ color : this.props.color }) )() }
						onTouchStart={this.seeILS}
						onMouseOver={this.seeILS}
						onMouseLeave={this.hideToolTip}
					>
					See related ILO Standards
					</span>
				);
			}
		}
	},

	// Insert a vertical bar if ILS is displayed
	seeVerticalBar() {
		if ( this.seeILSButton() ) {
			return <span className="bold">｜</span>;
		}
	},

	render() {
		return(
			<div className="toolTipButtons">
				{this.seeTargetButton()}
				{this.seeVerticalBar()}
				{this.seeILSButton()}
			</div>
		);
	}
});

export default Description;

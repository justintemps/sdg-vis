import React from "react";
import "./focusTargets.scss";

const FocusTargets = React.createClass({

	render() {

		const bullets = this.props.focusTargets.map( (target, i) => {
			return (
				<Bullet key={i} target={i} focusTarget={this.props.focusTarget} selectFocusTarget={this.props.selectFocusTarget} />
			);
		});

		return (
			<div className="focusTargets">
				<h3>Focus Targets</h3>
				<p>{this.props.focusTargets[this.props.focusTarget]}</p>
				<div className="targetSelector">
					<h4>View more:</h4>
					<ul className="bullets">
						{bullets}
					</ul>
				</div>
			</div>
		);
	}
});

const Bullet = React.createClass({

	selectFocusTarget() {
		this.props.selectFocusTarget(this.props.target);
	},

	render() {
		const selected = {color: "#3bc3e4"};
		const unselected = {color: "#bdebf6"};
		let isSelected = false;

		if (this.props.target === this.props.focusTarget) {
			isSelected = true;
		}

		return(
			<li className="bullet" style={ isSelected ? selected : unselected } onClick={this.selectFocusTarget}></li>
		);
	}
});

export default FocusTargets;

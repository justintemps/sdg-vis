import React from "react";
import "./focusTargets.scss";

const FocusTargets = React.createClass({
	render() {

		const focusTargets = this.props.focusTargets;

		const bullets = this.props.focusTargets.map( (target) => {
			return (
				<li className="bullet"></li>
			);
		});

		return (
			<div className="focusTargets">
				<h3>Focus Targets</h3>
				<p>{this.props.focusTargets[0]}</p>
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

export default FocusTargets;

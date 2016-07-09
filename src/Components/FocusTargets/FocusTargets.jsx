import React from "react";

const FocusTargets = React.createClass({
	render() {

		const bullets = this.props.focusTargets.map( (target) => {
			return (
				<li className="bullet"></li>
			);
		});

		return (
			<div className="focusTargets">
				<h3>Focus Targets</h3>
				<div className="focusTarget">
					{this.props.focusTargets[0]}
				</div>
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

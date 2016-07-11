import React from "react";
import Bullet from "../Bullet/Bullet.jsx";
import "./focusTargets.scss";

const FocusTargets = React.createClass({

	render() {

		const bullets = this.props.focusTargets.map( (target, i) => {
			return (
				<Bullet type="focusTarget" key={i} id={i} focusTarget={this.props.focusTarget} selectFocusTarget={this.props.selectFocusTarget} />
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

export default FocusTargets;

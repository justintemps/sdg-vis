/**
 * FocusTargets
 * Parent to Bullet
 */

import React from "react";
import Bullet from "../Bullet/Bullet.jsx";
import "./focusTargets.scss";

const FocusTargets = React.createClass({

	render() {

		const bullets = this.props.focusTargets.map( (target, i) =>
				<Bullet type="focusTarget"
					key={i}
					id={i}
					focusTarget={this.props.focusTarget}
					selectFocusTarget={this.props.selectFocusTarget}
					currentSDG = {this.props.currentSDG}
					data = {this.props.data}
				/>
		);

		const style = {color: this.props.data[this.props.currentSDG].sdgColor};

		return (
			<div className="focusTargets">
					<div className="targetSelector">
						<h3 style={style}>Focus Targets</h3>
						<ul className="bullets">
							{bullets}
						</ul>
					</div>
				<p>{this.props.focusTargets[this.props.focusTarget]}</p>
			</div>
		);
	}
});

export default FocusTargets;

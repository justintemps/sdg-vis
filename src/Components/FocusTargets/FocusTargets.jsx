/**
 * FocusTargets
 * Parent to Bullet
 */

import React from "react";
import Bullet from "../Bullet/Bullet.jsx";
import Arrow from "../Arrow/Arrow.jsx";

const FocusTargets = React.createClass({

	render() {

		const heading = (this.props.currentSDG > 0) ? "Decent Work Targets" : "Instructions";

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
					<div>
						<div className="targetSelector">
							<h3 style={style}>{heading}</h3>
							<ul className="bullets">
								{bullets}
							</ul>
						</div>
						<div className="targetDescription">
							<div>
								<span
									className={ this.props.currentSDG > 0 ? "targetNumber" : "instruction" }>
									{this.props.focusTargets[this.props.focusTarget].number}
								</span>
								<p>{this.props.focusTargets[this.props.focusTarget].description}</p>
							</div>
							<Arrow
								item={this.props.focusTarget}
								set={this.props.focusTargets}
								setItem={this.props.selectFocusTarget}
							/>
						</div>
					</div>
			</div>
		);
	}
});

export default FocusTargets;

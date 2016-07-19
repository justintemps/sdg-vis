/**
 * Bullet
 * Child to FocusTargets / ImpactStories
 */

import React from "react";
import "./bullet.scss";

const Bullet = React.createClass({

	selectFocusTarget() {
		this.props.selectFocusTarget(this.props.id);
	},

	selectStory() {
		this.props.selectStory(this.props.id);
	},

	render() {
		let isSelected = false;

		const selected = {color: this.props.data[this.props.currentSDG].sdgColor, opacity: 1};
		const unselected = {color: this.props.data[this.props.currentSDG].sdgColor};

		if (this.props.type === "focusTarget") {
			if (this.props.id === this.props.focusTarget) {
				isSelected = true;
			}
		} else {
			if (this.props.id === this.props.currentStory) {
				isSelected = true;
			}
		}

		return(
			<li className="bullet"
				style={ isSelected ? selected : unselected }
				onClick={(this.props.type === "focusTarget") ? this.selectFocusTarget : this.selectStory}>
			</li>
		);
	}
});

export default Bullet;

/**
 * Bullet
 * Child to FocusTargets / ImpactStories
 */

import React from "react";
import "./bullet.scss";

const Bullet = React.createClass({

	// Handler from SDGExplorer
	selectFocusTarget() {
		this.props.selectFocusTarget(this.props.id);
	},

	// Handler from SDGExplorer
	selectStory() {
		this.props.selectStory(this.props.id);
	},

	render() {
		let isSelected = false;

		// Styles to apply if the bullet has been selected or not
		const selected = {color: this.props.data[this.props.currentSDG].sdgColor, opacity: 1};
		const unselected = {color: this.props.data[this.props.currentSDG].sdgColor};

		// Determines if FocusTarget bullets are selected
		if (this.props.type === "focusTarget") {
			if (this.props.id === this.props.focusTarget) {
				isSelected = true;
			}

		// Determines if ImpactStories bullets are selected
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

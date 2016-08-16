/**
 * Arrow
 * Child to FocusTargets / ImpactStories
 */

import React from "react";

const Arrow = React.createClass({

	/**
	 * Returns the next item from a set of item or resets if the last item is already selected.
	 * @prop item {number} - the current item
	 * @prop set {array} - a set of items
	 * @prop setItem {callback} - a function that takes a number as an argument
	*/
	nextItem() {
		if ( this.props.item < this.props.set.length - 1 ) {
			this.props.setItem(this.props.item + 1);
		} else {
			this.props.setItem(0);
		}
	},

	render() {
		return(
			<div className="arrow" onClick={this.nextItem}></div>
		);
	}
});

export default Arrow;

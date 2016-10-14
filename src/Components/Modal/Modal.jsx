/**
 * Modal
 *
**/

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Modal = React.createClass({
	render() {
		if (this.props.isOpen) {
			return (
				<ReactCSSTransitionGroup transitionName={this.props.transitionName}>
					<div className="modal">
						{this.props.children}
					</div>
				</ReactCSSTransitionGroup>
			);
		} else {
			return (
				<ReactCSSTransitionGroup transitionName={this.props.transitionName} />
			);
		}
	}
});

export default Modal;

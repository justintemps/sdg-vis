/**
 * Modal
 *
**/

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Modal = React.createClass({
	render() {
		if (this.props.isModalOpen) {
			return (
				<ReactCSSTransitionGroup
					transitionName="modal-anim"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>

					<div className="modal">
						{this.props.children}
					</div>

				</ReactCSSTransitionGroup>
			);
		}
		else {
			return false;
		}
	}
});

export default Modal;

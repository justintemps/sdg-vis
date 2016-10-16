/**
 * Modal
 *
**/

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Modal = React.createClass({

	componentWillMount() {
		console.log("The Modal mounted");
		document.body.className += "no-scroll";
	},

	componentWillUnmount() {
		document.body.className = "";
	},

	render() {
		return (
			<div>
				<div className="modal">
					{this.props.children}
				</div>
				<div className="modal-backdrop"></div>
			</div>
		);
	}
});

export default Modal;

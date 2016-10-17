/**
 * Modal
 *
**/

import React from "react";

const Modal = React.createClass({

	propTypes: {
		closeModal : React.PropTypes.func.isRequired
	},

	render() {
		return (
			<div>
				<div id="modal-backdrop" onClick={this.props.closeModal}></div>
				<div className="modal">
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Modal;

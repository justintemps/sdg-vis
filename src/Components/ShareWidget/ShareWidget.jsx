/**
 * ShareWidget
 * Child to ImpactStories
 */

import React from "react";
import "./shareWidget.scss";

const ShareWidget = React.createClass({

	render() {
		return(
			<Sharebutton src="" />
		);
	}

});

const Sharebutton = React.createClass({
	render() {
		return(
			<img src={this.props.src} />
		);
	}
});

export default ShareWidget;

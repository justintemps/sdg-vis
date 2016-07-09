import React from "react";
import data from "!json!../../data.json";
import "./icon.scss";

const Icon = React.createClass({
	render() {
		return (
			<img className="icon" src={this.props.src} />
		);
	}
});

export default Icon;

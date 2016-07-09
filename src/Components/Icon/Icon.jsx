import React from "react";
import data from "!json!../../data.json";

const Icon = React.createClass({
	render() {
		return (
			<img className="icon" src={this.props.src} />
		);
	}
});

export default Icon;

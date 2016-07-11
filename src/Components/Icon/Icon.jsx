import React from "react";
import data from "!json!../../data.json";
import "./icon.scss";

const Icon = React.createClass({

	clickHandler() {
		this.props.handler(this.props.sdg);
	},

	render() {
		return (
			<img className="icon" src={this.props.src} onClick={this.clickHandler}/>
		);
	}
});

export default Icon;

import React from "react";
import "./sdgexplorer.scss";
import data from "!json!../../data.json";


const SDGexplorer = React.createClass({
	render() {
		return (
			<div className="main-container">
				<div className="vis-container">
					<IconGrid />
				</div>
			</div>
		);
	}
});

const IconGrid = React.createClass({
	render() {
		return (
			<div className="icons-row">
				<Icon src={data.sdgIcon} />
			</div>
		);
	}
});


const Icon = React.createClass({
	render() {
		return (
			<img className="icon" src={this.props.src} />
		);
	}
});

export default SDGexplorer;

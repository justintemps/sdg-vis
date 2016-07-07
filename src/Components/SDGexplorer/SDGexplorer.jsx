import React from "react";
import data from "!json!../../data.json";

const SDGexplorer = React.createClass({
	render() {
		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row startFrom={1} numberIcons={12} key={1} />
					<Row startFrom={12} numberIcons={6} key={2} />
				</div>
			</div>
		);
	}
});

const Row = React.createClass({
	render() {
		const icons = [];
		for (let i = (this.props.startFrom - 1); i < (this.props.numberIcons + this.props.startFrom - 1); i++ ) {
			icons.push( <Icon key={data[i].sdgNumber} src={data[i].sdgIcon} /> );
		}
		return (
			<div className="row">
				{icons}
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

import React from "react";
import data from "!json!../../data.json";
import "./sdgexplorer.scss";

const SDGexplorer = React.createClass({
	render() {
		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row startFrom={1} numberIcons={12} key={1} />
					<ViewerWindow />
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

const ViewerWindow = React.createClass({
	render() {
		return(
			<div className="viewerWindow">
				<TitleBar sdgNumber={data[7].sdgNumber} sdgName={data[7].sdgName} />
			</div>
		);
	}
});

const TitleBar = React.createClass({
	render() {
		return(
			<div>
				<div className="titleBar">
					<div className="sdgNumber">
						{this.props.sdgNumber}
					</div>
					<div className="sdgName">
						{this.props.sdgName}
					</div>
				</div>
			</div>
		);
	}
});

export default SDGexplorer;

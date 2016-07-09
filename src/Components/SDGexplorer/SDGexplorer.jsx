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
				<ViewerWindowContent />
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

const ViewerWindowContent = React.createClass({
	render() {

		const focusTargets = data[7].focusTargets.map( (focusTargets) => {
			return (
				focusTargets.description
			);
		});

		return (
			<div className="viewerWindowContent">
				<FocusTargets focusTargets={focusTargets} />
			</div>
		);
	}
});

const FocusTargets = React.createClass({
	render() {

		const bullets = this.props.focusTargets.map( (target) => {
			return (
				<li className="bullet"></li>
			);
		});

		return (
			<div className="focusTargets">
				<h3>Focus Targets</h3>
				<div className="focusTarget">
					{this.props.focusTargets[0]}
				</div>
				<div className="targetSelector">
					<h4>View more:</h4>
					<ul className="bullets">
						{bullets}
					</ul>
				</div>
			</div>
		);
	}
});

export default SDGexplorer;

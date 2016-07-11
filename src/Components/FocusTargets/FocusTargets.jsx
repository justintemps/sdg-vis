import React from "react";
import "./focusTargets.scss";

const FocusTargets = React.createClass({

	getInitialState() {
		return (
			{focusTarget : 0}
		);
	},

	selectFocusTarget(focusTarget) {
		this.setState({focusTarget: focusTarget});
	},

	render() {

		const focusTargets = this.props.focusTargets;

		const bullets = this.props.focusTargets.map( (target, i) => {
			return (
				<Bullet key={i} target={i} handler={this.selectFocusTarget} />
			);
		});

		return (
			<div className="focusTargets">
				<h3>Focus Targets</h3>
				<p>{this.props.focusTargets[this.state.focusTarget]}</p>
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

const Bullet = React.createClass({

	selectFocusTarget() {
		this.props.handler(this.props.target);
	},

	render() {
		return(
			<li className="bullet" onClick={this.selectFocusTarget}></li>
		);
	}
});

export default FocusTargets;

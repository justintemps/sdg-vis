/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Row from "../Row/Row.jsx";
import ViewerWindow from "../ViewerWindow/ViewerWindow.jsx";
import data from "!json!../../data.json";

const SDGexplorer = React.createClass({

	getInitialState() {
		return({
			currentSdg : 0,
			focusTarget : 0,
			currentStory : 0,
			currentRow : 0,
			longDescription : false
		});
	},

	// Selecting a new SDG will reset the current focus target and story
	selectSDG(sdg) {
		this.setState({
			currentSdg: sdg,
			focusTarget : 0,
			currentStory : 0,
			longDescription : false
		});

		const shift = () => this.shiftRow( Math.floor( sdg / 6));

		setTimeout(shift, 600);
	},

	// Selects the current focus target
	selectFocusTarget(focusTarget) {
		this.setState({
			focusTarget: focusTarget,
			longDescription : false
		});
	},

	// Selects the current story
	selectStory(story) {
		this.setState({
			currentStory: story
		});
	},

	shiftRow(row) {
		this.setState({
			currentRow: row
		});
	},

	// Toggles long description for mobile
	setLongDescription(bool) {
		this.setState({
			longDescription: bool
		});
	},

	render() {

		const iconsAbove = (row) => {
			let numberIcons;
			switch(row) {
			case 0:
				numberIcons = 6;
				break;
			case 1:
				numberIcons = 12;
				break;
			case 2:
				numberIcons = 18;
				break;
			}
			return numberIcons;
		};

		const iconsBelow = (row) => {
			let numberIcons;
			switch(row) {
			case 0:
				numberIcons = 12;
				break;
			case 1:
				numberIcons = 6;
				break;
			case 2:
				numberIcons = 0;
				break;
			}
			return numberIcons;
		};

		const startFrom = row => {
			let num;
			switch(row) {
			case 0:
				num = 6;
				break;
			case 1:
				num = 12;
				break;
			case 2:
				num = 0;
				break;
			}
			return num;
		};

		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row
						startFrom={0}
						numberIcons={iconsAbove(this.state.currentRow)}
						key={1}
						handler={this.selectSDG}
						currentSdg={this.state.currentSdg}
						data={data}
					/>
				<ReactCSSTransitionGroup transitionName="sliding-viewer"
					transitionLeaveTimeout={500} transitionEnterTimeout={500}
				>
					<ViewerWindow

						key={this.state.currentSdg}
						currentSdg={this.state.currentSdg}
						focusTarget={this.state.focusTarget}
						selectFocusTarget={this.selectFocusTarget}
						currentStory={this.state.currentStory}
						selectStory={this.selectStory}
						data={data}
						longDescription={this.state.longDescription}
						setLongDescription={this.setLongDescription}
					/>

				</ReactCSSTransitionGroup>

					<Row
						startFrom={startFrom(this.state.currentRow)}
						numberIcons={iconsBelow(this.state.currentRow)}
						key={2}
						handler={this.selectSDG}
						currentSdg={this.state.currentSdg}
						data={data}
					/>
				</div>
			</div>
		);
	}
});

const FirstChild = React.createClass({
	render: function() {
		let children = React.Children.toArray(this.props.children);
		return children[0] || null;
	}
});

export default SDGexplorer;

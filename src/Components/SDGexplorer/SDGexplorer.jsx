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
import {icons} from "../Icon/icons.js";

const SDGexplorer = React.createClass({

	getInitialState() {
		return({
			currentSdg : 0,
			focusTarget : 0,
			currentStory : 0,
			currentRow : 0,
			rowChanged: false,
			longDescription : false
		});
	},

	// Selecting a new SDG will reset the current focus target and story
	selectSDG(sdg) {

		this.setState({
			currentSdg: sdg,
			focusTarget : 0,
			currentStory : 0,
			longDescription : false,
			rowChanged: Math.floor(sdg / 6) !== this.state.currentRow ? true : false
		});

		// If the row changed, shift the row
		setTimeout( ()=> this.shiftRow(Math.floor( sdg / 6)), 500 );

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

	// Determines the row underneath which the viwer window should be displayed
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

		/**
		 * numberIcons() decides how many icons to display in each row
		 * @param {Number} row - the current row
		 * @param {Boolean} top - is this for the top row?
		 * @return {Number} number of icons to display
		*/
		function numberIcons(row, top) {
			let numberIcons;
			switch(row) {
			case 0:
				numberIcons = top ? 6 : 12;
				break;
			case 1:
				numberIcons = top ? 12 : 6;
				break;
			case 2:
				numberIcons = top ? 18 : 0;
				break;
			}
			return numberIcons;
		}

		/**
		 * startFrom() which number icon should the row start from?
		 * @param {Number} row - the current row
		 * @return {Number} num - the number of the icon to start with
		*/
		function startFrom(row) {
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
		}

		return (
			<div className="wrapper">
				<div className="sdgExplorer">

					<Row
						startFrom={0}
						numberIcons={numberIcons(this.state.currentRow, true)}
						key={1}
						handler={this.selectSDG}
						currentSdg={this.state.currentSdg}
						data={data}
						rowChanged={this.state.rowChanged}
						icons={icons}
					/>

					<ReactCSSTransitionGroup
						transitionName="sliding-viewer"
						transitionLeave={this.state.rowChanged}
						transitionEnter={this.state.rowChanged}
						transitionLeaveTimeout={500}
						transitionEnterTimeout={1200}>

						<ViewerWindow
							key={ this.state.rowChanged ? this.state.currentSdg : 900}
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
						numberIcons={numberIcons(this.state.currentRow, false)}
						key={2}
						handler={this.selectSDG}
						currentSdg={this.state.currentSdg}
						data={data}
						rowChanged={this.state.rowChanged}
						icons={icons}
					/>
				</div>
			</div>
		);
	}
});

export default SDGexplorer;

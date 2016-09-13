/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Row from "../Row/Row.jsx";
import ViewerWindow from "../ViewerWindow/ViewerWindow.jsx";
import data from "!json!../../data1.json";
import {icons} from "../Icon/icons.js";

const SDGexplorer = React.createClass({

	getInitialState() {
		return({
			currentSdg : 0,
			currentStory : 0,
			currentRow : 0,
			focusTarget : 0,
			isMobile : false,
			longDescription : false,
			rowChanged : false,
			toolTipVisible : false
		});
	},

	componentWillMount() {
		this.setMobileRows(null);
	},

	componentDidMount() {
		window.addEventListener("resize", this.setMobileRows);
	},

	setMobileRows(e) {
		if (window.innerWidth < 640) {
			this.setState({	isMobile : true });
		} else {
			this.setState({	isMobile : false });
		}
	},

	// Select a new SDG and change the row of necessary.
	// Also resets the current story and focus target
	selectSDG(sdg) {

		const rowDivisor = this.state.isMobile ? 3 : 6;

		this.setState({
			currentSdg : sdg,
			focusTarget : 0,
			currentStory : 0,
			longDescription : false,
			rowChanged : Math.floor(sdg / rowDivisor) !== this.state.currentRow ? true : false
		});

		// Shift the row if it changed
		setTimeout( () => this.shiftRow( Math.floor(sdg/rowDivisor) ), 500 );
	},

	// Select the current focus target
	selectFocusTarget(focusTarget) {
		this.setState({
			focusTarget: focusTarget,
			longDescription : false
		});
	},

	// Select the current story
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

	toggleToolTip(visible) {
		if (visible) {
			this.setState({
				toolTipVisible: true
			});
		} else if (!visible) {
			this.setState({
				toolTipVisible: false
			});
		}
	},

	render() {

		const isMobile = this.state.isMobile;

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
				if (isMobile) {
					numberIcons = top ? 3 : 15;
				} else {
					numberIcons = top ? 6 : 12;
				}
				break;
			case 1:
				if (isMobile) {
					numberIcons = top ? 6 : 12;
				} else {
					numberIcons = top ? 12 : 6;
				}
				break;
			case 2:
				if (isMobile) {
					numberIcons = top ? 9 : 9;
				} else {
					numberIcons = top ? 18 : 0;
				}
				break;
			case 3:
				numberIcons = top ? 12 : 6;
				break;
			case 4:
				numberIcons = top ? 15 : 3;
				break;
			case 5:
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
				num = isMobile ? 3 : 6;
				break;
			case 1:
				num = isMobile ? 6 : 12;
				break;
			case 2:
				num = isMobile ? 9 : 0;
				break;
			case 3:
				num = 12;
				break;
			case 4:
				num = 15;
				break;
			case 5:
				num = 18;
				break;
			}
			return num;
		}

		return (
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
						data={data}
						key={ this.state.rowChanged ? this.state.currentSdg : 900}
						currentSdg={this.state.currentSdg}
						focusTarget={this.state.focusTarget}
						currentStory={this.state.currentStory}
						selectFocusTarget={this.selectFocusTarget}
						longDescription={this.state.longDescription}
						toolTipVisible={this.state.toolTipVisible}
						selectStory={this.selectStory}
						setLongDescription={this.setLongDescription}
						toggleToolTip={this.toggleToolTip}
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
		);
	}
});

export default SDGexplorer;

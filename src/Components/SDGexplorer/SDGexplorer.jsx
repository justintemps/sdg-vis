/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import React 					from "react";
import ReactCSSTransitionGroup 	from "react-addons-css-transition-group";
import Row						from "../Row/Row.jsx";
import ViewerWindow				from "../ViewerWindow/ViewerWindow.jsx";
import data 					from "!json!../../data.json";
import {icons}					from "../Icon/icons.js";
import {numberIcons, startFrom}	from "./setRows.js";

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
		document.body.addEventListener("touchstart", () => { this.toggleToolTip(false); });
	},

	// Are we in mobile view?
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

		return (
			<div className="sdgExplorer">
				<Row
					startFrom={0}
					numberIcons={numberIcons(this.state.currentRow, true, this.state.isMobile)}
					key={1}
					selectSDG={this.selectSDG}
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
					startFrom={startFrom(this.state.currentRow, this.state.isMobile)}
					numberIcons={numberIcons(this.state.currentRow, false, this.state.isMobile)}
					key={2}
					selectSDG={this.selectSDG}
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

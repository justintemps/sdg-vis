/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import React from "react";
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

		this.shiftRow( Math.floor( (this.state.currentSdg + 1) / 6) );
		console.log( Math.floor( (this.state.currentSdg + 1) / 6) );
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
		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row
						startFrom={0}
						numberIcons={6}
						key={1}
						handler={this.selectSDG}
						currentSdg={this.state.currentSdg}
						data={data}
					/>
					<ViewerWindow
						currentSdg={this.state.currentSdg}
						focusTarget={this.state.focusTarget}
						selectFocusTarget={this.selectFocusTarget}
						currentStory={this.state.currentStory}
						selectStory={this.selectStory}
						data={data}
						longDescription={this.state.longDescription}
						setLongDescription={this.setLongDescription}
					/>
					<Row
						startFrom={6}
						numberIcons={12}
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

export default SDGexplorer;

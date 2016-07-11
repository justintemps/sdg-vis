import React from "react";
import Row from "../Row/Row.jsx";
import ViewerWindow from "../ViewerWindow/ViewerWindow.jsx";
import "../../styles/base.scss";
import "./sdgexplorer.scss";

const SDGexplorer = React.createClass({

	getInitialState() {
		return({
			sdg : 7,
			focusTarget : 0,
			currentStory : 0
		});
	},

	selectSDG(sdg) {
		this.setState({
			sdg: sdg,
			focusTarget : 0
		});
	},

	selectFocusTarget(focusTarget) {
		this.setState({
			focusTarget: focusTarget
		});
	},

	selectStory(story) {
		this.setState({
			currentStory : story
		});
	},

	render() {
		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row
						startFrom={1}
						numberIcons={12}
						key={1}
						handler={this.selectSDG}
					/>
					<ViewerWindow
						sdg={this.state.sdg}
						focusTarget={this.state.focusTarget}
						selectFocusTarget={this.selectFocusTarget}
						currentStory={this.state.currentStory}
						selectStory={this.selectStory}
					/>
					<Row
						startFrom={12}
						numberIcons={6}
						key={2}
						handler={this.selectSDG}
					/>
				</div>
			</div>
		);
	}
});

export default SDGexplorer;

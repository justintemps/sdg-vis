import React from "react";
import Row from "../Row/Row.jsx";
import ViewerWindow from "../ViewerWindow/ViewerWindow.jsx";
import "../../styles/base.scss";
import "./sdgexplorer.scss";

const SDGexplorer = React.createClass({

	getInitialState() {
		return(
			{selected : 7}
		);
	},

	render() {
		return (
			<div className="wrapper">
				<div className="sdgExplorer">
					<Row startFrom={1} numberIcons={12} key={1} />
					<ViewerWindow selected={this.state.selected} />
					<Row startFrom={12} numberIcons={6} key={2} />
				</div>
			</div>
		);
	}
});

export default SDGexplorer;

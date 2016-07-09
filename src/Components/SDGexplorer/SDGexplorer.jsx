import React from "react";
import data from "!json!../../data.json";
import Row from "../Row/Row.jsx";
import ViewerWindow from "../ViewerWindow/ViewerWindow.jsx";

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

export default SDGexplorer;

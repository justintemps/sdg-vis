import React from "react";
import data from "!json!../../data.json";

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

export default TitleBar;

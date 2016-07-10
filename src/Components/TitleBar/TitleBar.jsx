import React from "react";
import data from "!json!../../data.json";
import "./titleBar.scss";

const TitleBar = React.createClass({

	render() {

		const color = {
			background : this.props.sdgColor
		};

		return(
			<div>
				<div className="titleBar" style={color}>
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

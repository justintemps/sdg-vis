import React from "react";
import data from "!json!../../data.json";
import Icon from "../Icon/Icon.jsx";
import "./row.scss";

const Row = React.createClass({
	render() {
		const icons = [];
		for ( let i = (this.props.startFrom); i < (this.props.numberIcons + this.props.startFrom); i++ ) {
			icons.push( <Icon
				sdg={data[i].sdgNumber}
				key={i}
				src={data[i].sdgIcon}
				color={data[i].sdgColor}
				handler={this.props.handler}
				currentSdg={this.props.currentSdg}
			/> );
		}
		return (
			<div className="row">
				{icons}
			</div>
		);
	}
});

export default Row;

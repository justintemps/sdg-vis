import React from "react";
import data from "!json!../../data.json";
import Icon from "../Icon/Icon.jsx";
import "./row.scss";

const Row = React.createClass({
	render() {
		const icons = [];
		for ( let i = (this.props.startFrom - 1); i < (this.props.numberIcons + this.props.startFrom - 1); i++ ) {
			icons.push( <Icon
				sdg={data[i].sdgNumber - 1}
				key={data[i].sdgNumber}
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

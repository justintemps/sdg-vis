import React from "react";
import data from "!json!../../data.json";
import Icon from "../Icon/Icon.jsx";

const Row = React.createClass({
	render() {
		const icons = [];
		for (let i = (this.props.startFrom - 1); i < (this.props.numberIcons + this.props.startFrom - 1); i++ ) {
			icons.push( <Icon key={data[i].sdgNumber} src={data[i].sdgIcon} /> );
		}
		return (
			<div className="row">
				{icons}
			</div>
		);
	}
});

export default Row;

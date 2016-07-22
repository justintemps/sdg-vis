import React from "react";
import Icon from "../Icon/Icon.jsx";

const Row = React.createClass({

	icons: [],

	// Gets icons according to startFrom and numberIcons props passed from SDGExplorer
	getIcons() {
		this.icons = [];
		for ( let i = (this.props.startFrom); i < (this.props.numberIcons + this.props.startFrom); i++ ) {
			this.icons.push( <Icon
				sdg={this.props.data[i].sdgNumber}
				key={i}
				src={this.props.data[i].sdgIcon}
				color={this.props.data[i].sdgColor}
				handler={this.props.handler}
				currentSdg={this.props.currentSdg}
				data={this.props.data}
			/> );
		}
	},

	render() {
		this.getIcons();
		return (
			<div className="row">
				{this.icons}
			</div>
		);
	}
});

export default Row;

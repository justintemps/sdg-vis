import React from "react";
import data from "!json!../../data.json";
import "./icon.scss";
import sdg0 from "../../images/sdg1.svg";
import sdg1 from "../../images/sdg2.svg";
import sdg2 from "../../images/sdg3.svg";
import sdg3 from "../../images/sdg4.svg";
import sdg4 from "../../images/sdg5.svg";
import sdg5 from "../../images/sdg6.svg";
import sdg6 from "../../images/sdg7.svg";
import sdg7 from "../../images/sdg8.svg";
import sdg8 from "../../images/sdg9.svg";
import sdg9 from "../../images/sdg10.svg";
import sdg10 from "../../images/sdg11.svg";
import sdg11 from "../../images/sdg12.svg";
import sdg12 from "../../images/sdg13.svg";
import sdg13 from "../../images/sdg14.svg";
import sdg14 from "../../images/sdg15.svg";
import sdg15 from "../../images/sdg16.svg";
import sdg16 from "../../images/sdg17.svg";
import sdg17 from "../../images/sdg18.svg";

const sdg = [
	sdg0, sdg1, sdg2, sdg3, sdg4, sdg5, sdg6, sdg7, sdg8, sdg9,
	sdg10, sdg11, sdg12, sdg13, sdg14, sdg15, sdg16, sdg17
];

const Icon = React.createClass({

	clickHandler() {
		this.props.handler(this.props.sdg);
	},

	render() {

		return (
			<img className="icon" src={sdg[this.props.sdg]} onClick={this.clickHandler}/>
		);
	}
});

export default Icon;

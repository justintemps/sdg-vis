import React from "react";
import data from "!json!../../data.json";
import "./icon.scss";

import Sdg1 from "!babel!svg-react!../../images/sdg1.svg";
import Sdg2 from "!babel!svg-react!../../images/sdg2.svg";
import Sdg3 from "!babel!svg-react!../../images/sdg3.svg";
import Sdg4 from "!babel!svg-react!../../images/sdg4.svg";
import Sdg5 from "!babel!svg-react!../../images/sdg5.svg";
import Sdg6 from "!babel!svg-react!../../images/sdg6.svg";
import Sdg7 from "!babel!svg-react!../../images/sdg7.svg";
import Sdg8 from "!babel!svg-react!../../images/sdg8.svg";
import Sdg9 from "!babel!svg-react!../../images/sdg9.svg";
import Sdg10 from "!babel!svg-react!../../images/sdg10.svg";
import Sdg11 from "!babel!svg-react!../../images/sdg11.svg";
import Sdg12 from "!babel!svg-react!../../images/sdg12.svg";
import Sdg13 from "!babel!svg-react!../../images/sdg13.svg";
import Sdg14 from "!babel!svg-react!../../images/sdg14.svg";
import Sdg15 from "!babel!svg-react!../../images/sdg15.svg";
import Sdg16 from "!babel!svg-react!../../images/sdg16.svg";
import Sdg17 from "!babel!svg-react!../../images/sdg17.svg";
import Sdg18 from "!babel!svg-react!../../images/sdg18.svg";

const Icon = React.createClass({

	clickHandler() {
		this.props.handler(this.props.sdg);
	},

	render() {

		const sdgs  = [
			<Sdg1 className="sdg1" opacity={this.props.sdg === this.props.currentSdg ? 1: 0.3} />,
			<Sdg2 className="sdg2" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg3 className="sdg3" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg4 className="sdg4" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg5 className="sdg5" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg6 className="sdg6" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg7 className="sdg7" opacity={this.props.sdg === this.props.currentSdg ? 1 : 0.3} />,
			<Sdg8 className="sdg8" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg9 className="sdg9" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg10 className="sdg10" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg11 className="sdg11" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg12 className="sdg12" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg13 className="sdg13" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg14 className="sdg14" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg15 className="sdg15"opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg16 className="sdg16"opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />,
			<Sdg17 className="sdg17" opacity={(this.props.sdg === this.props.currentSdg) ? 1 : 0.3} />
		];

		return (
			<div className="icon" onClick={this.clickHandler}>
				{sdgs[this.props.sdg]}
			</div>
		);
	}
});

export default Icon;

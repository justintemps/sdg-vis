/**
 * ViewerWindowContent
 */

 import React from "react";
 import globalGoalsSVG from "!babel!svg-react!../../images/gglogo.svg";

 const gglogo = React.createElement(globalGoalsSVG, {
	className : "gglogo"
 });

 const DefaultViewerWindowContent = React.createClass({

	render() {

		return(
			<div className="defaultViewerWindowContent">
				<div className="defaultDescription">
					<p>The 2030 Agenda places <span className="link" onClick={this.props.openModal}>Decent Work for all<span className="fa fa-angle-right"></span></span> at the heart of policies for sustainable and inclusive growth and development.</p>
					<p><span className="emphasize">Choose a goal</span> and learn how the ILO's mandate to promote social justice is helping to achieve each of the Sustainable Development Goals.</p>
				</div>
				<div className="gglogo-container">
					{gglogo}
				</div>
			</div>
		);
	}
 });

 export default DefaultViewerWindowContent;

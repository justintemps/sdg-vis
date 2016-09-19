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
					<p>The 2030 Agenda places <a href="/topics/sdg-2030/goal-8/lang--en/index.htm">Decent Work for all</a> at the heart of policies for sustainable and inclusive growth and development.</p>
					<p><span className="emphasize">Choose a goal</span> and learn how the ILO's mandate and purpose of social justice is helping to acheive each of the Sustainable Development Goals.</p>
				</div>
				<div className="gglogo-container">
					{gglogo}
				</div>
			</div>
		);
	}
 });

 export default DefaultViewerWindowContent;

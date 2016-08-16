/**
 * ViewerWindowContent
 */

 import React from "react";

 const DefaultViewerWindowContent = React.createClass({

	render() {

		const imgSrc = "src/images/gglogo.svg";

		return(
			<div className="defaultViewerWindowContent">
				<div className="defaultDescription">
					<p>The 2030 Agenda places <span className="emphasize">Decent Work for all</span> at the heart of policies for sustainable and inclusive growth and development.</p>
					<p><span className="emphasize">Choose a goal</span> and learn how the ILO's mandate and purpose of social justice is helping to acheive each of the Sustainable Development Goals.</p>
				</div>
				<div className="gglogo-container">
					<img className="gglogo" src={imgSrc}></img>
				</div>
			</div>
		);
	}
 });

 export default DefaultViewerWindowContent;

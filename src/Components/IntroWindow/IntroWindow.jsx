import React from "react";
import "./introWindow.scss";

/**
 * IntrowWindow
 * Child of ViewerWindow
 */

 const IntroWindow = React.createClass({

	render() {
		return(
			<div className="introWindow">
				<p>The 2030 Agenda for Sustainable Development places decent work for all at the heart of policies for sustainable and inclusive growth and development.</p>
				<h3>How it works</h3>
				<p> Select a goal and learn how Decent Work is helping to achieve each of the Sustainable Development Goals</p>
				<ul>
					<li>Find out which targets of the 2030 fall under ILO's mandate</li>
					<li>Browsethrough dozens of stories that show how ILO is working to reach the SDGs</li>
				</ul>
			</div>
		);
	}

 });

 export default IntroWindow;

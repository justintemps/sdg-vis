/**
 * ShareWidget
 * Child to ImpactStories
 */

import React from "react";
import "./shareWidget.scss";

const ShareWidget = React.createClass({

	fbShare() {

		window.fbAsyncInit = () => {

			FB.init({
				appId      : "1479961782307072",
				xfbml      : true,
				version    : "v2.7"
			});

			FB.ui({
				method: "share",
				href: this.props.currentStoryUrl
			}, function(response){});

		};

		window.fbAsyncInit();

	},

	render() {
		return(
			<div className="shareWidget">
				<span>Share this story:</span>
				<Sharebutton network="facebook" handler={this.fbShare}/>
				<Sharebutton network="twitter" />
				<Sharebutton network="linkedin" />
			</div>
		);
	}
});

const Sharebutton = React.createClass({

	network : {
		twitter : "fa fa-twitter",
		facebook : "fa fa-facebook",
		linkedin : "fa fa-linkedin"
	},

	render() {

		return(
			<i className={this.network[this.props.network]} aria-hidden="true" onClick={this.props.handler}></i>
		);
	}
});

export default ShareWidget;

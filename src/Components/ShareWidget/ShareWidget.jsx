/**
 * ShareWidget
 * Child to ImpactStories
 */

import React from "react";
import popupCenter from "./popupCenter.js";

const ShareWidget = React.createClass({

	// Share on Facebook
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

	// Share on Twitter
	tweet() {
		const baseUrl = "https://twitter.com/intent/tweet?text=";
		const postText = encodeURI(this.props.currentStoryTitle);
		const sharedUrl = encodeURI(this.props.currentStoryUrl);
		const post = baseUrl + postText + " " + sharedUrl;

		// Center new window on screen
		popupCenter(post, "Post a Tweet on Twitter", "400", "400");
	},

	// Share on LinkedIn
	liShare() {
		const baseUrl = "http://www.linkedin.com/shareArticle?mini=true";
		const sharedUrl = `&url=${encodeURI(this.props.currentStoryUrl)}`;
		const postText = `&title=${encodeURI(this.props.currentStoryTitle)}`;
		const postSummary = `&summary=${encodeURI(this.props.currentStoryBlurb)}`;
		const post = baseUrl + sharedUrl + postText + postSummary;

		// Center new window on screen
		popupCenter(post, "Share on LinkedIn", "400", "400");
	},

	render() {
		return(
			<div className="shareWidget">
				<span>Share this story:</span>
				<Sharebutton network="facebook" handler={this.fbShare} />
				<Sharebutton network="twitter" handler={this.tweet} />
				<Sharebutton network="linkedin" handler={this.liShare} />
			</div>
		);
	}
});

const Sharebutton = React.createClass({

	// Sets font-awesome class
	network : {
		twitter : "fa fa-twitter fa-stack-1x",
		facebook : "fa fa-facebook fa-stack-1x",
		linkedin : "fa fa-linkedin fa-stack-1x"
	},

	render() {

		return(
			<span className="fa-stack fa-lg">
				<i className="fa fa-circle fa-stack-2x"></i>
				<i className={this.network[this.props.network]} aria-hidden="true" onClick={this.props.handler}></i>
			</span>

		);
	}
});

export default ShareWidget;

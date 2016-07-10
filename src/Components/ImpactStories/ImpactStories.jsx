import React from "react";
import "./impactStories.scss";

const ImpactStories = React.createClass({
	render() {

		const bullets = this.props.impactStories.map( (target) => {
			return (
				<li className="bullet"></li>
			);
		});

		return(
			<div className="impactStories">
				<h3>Impact Stories</h3>
				<div  className="stories-wrapper">
					<div>
						<a href={this.props.impactStories[0].url} target="_blank">
							<h2>{this.props.impactStories[0].title}</h2>
						</a>
						<p>{this.props.impactStories[0].blurb}</p>
						<div className="targetSelector">
							<h4>View more:</h4>
							<ul className="bullets">
								{bullets}
							</ul>
						</div>
					</div>
					<div className="thumbnail-wrapper">
						<a href={this.props.impactStories[0].url} target="_blank">
							<img className="thumbnail" src={this.props.impactStories[0].imageUrl} />
						</a>
					</div>
				</div>
			</div>
		);
	}
});

export default ImpactStories;

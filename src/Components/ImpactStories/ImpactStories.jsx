import React from "react";
import Bullet from "../Bullet/Bullet.jsx";
import "./impactStories.scss";

const ImpactStories = React.createClass({
	render() {

		const bullets = this.props.impactStories.map( (target, i) => {
			return (
				<Bullet
					type="impactStory"
					key={i}
					id={i}
					currentStory={this.props.currentStory}
					selectStory={this.props.selectStory}
				/>
			);
		});

		return(
			<div className="impactStories">
				<h3>Impact Stories</h3>
				<div  className="stories-wrapper">
					<div>
						<a href={this.props.impactStories[this.props.currentStory].url} target="_blank">
							<h2>{this.props.impactStories[this.props.currentStory].title}</h2>
						</a>
						<p>{this.props.impactStories[this.props.currentStory].blurb}</p>
						<div className="targetSelector">
							<h4>View more:</h4>
							<ul className="bullets">
								{bullets}
							</ul>
						</div>
					</div>
					<div className="thumbnail-wrapper">
						<a href={this.props.impactStories[this.props.currentStory].url} target="_blank">
							<img className="thumbnail" src={this.props.impactStories[this.props.currentStory].imageUrl} />
						</a>
					</div>
				</div>
			</div>
		);
	}
});

export default ImpactStories;

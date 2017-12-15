import React from "react";
import ShareWidget from '../ShareWidget/ShareWidget.jsx';
import Arrow from '../Arrow/Arrow.jsx';

const ImpactStory = React.createClass({
  render() {
    return (
      <div className="stories-wrapper">
        <div>
          <div className="title-blurb-wrapper">
            <a
              href={this.props.url}
              target="_blank"
            >
              <h2>{this.props.title}</h2>
            </a>
            <p>{this.props.blurb}</p>
            <ShareWidget
              currentStoryUrl={
                this.props.url
              }
              currentStoryTitle={
                this.props.title
              }
              currentStoryBlurb={
                this.props.blurb
              }
            />
          </div>
        </div>
        <div className="thumbnail-wrapper">
          <a
            href={this.props.url}
            target="_blank"
          >
            <img
              className="thumbnail"
              src={this.props.imageUrl}
            />
          </a>
          <Arrow
            item={this.props.currentStory}
            set={this.props.impactStories}
            setItem={this.props.selectStory}
          />
        </div>
      </div>
    );
  }
});

export default ImpactStory;

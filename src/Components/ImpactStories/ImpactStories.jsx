/**
 * ImpactStories
 * Child to ViewerWindowContent
 * Parent to Bullet, ShareWidget
 */

import React from 'react';
import Bullet from '../Bullet/Bullet.jsx';
import ShareWidget from '../ShareWidget/ShareWidget.jsx';
import Arrow from '../Arrow/Arrow.jsx';

const ImpactStories = React.createClass({
  render() {
    const bullets = this.props.impactStories.map((target, i) => {
      return (
        <Bullet
          type="impactStory"
          key={i}
          id={i}
          currentStory={this.props.currentStory}
          selectStory={this.props.selectStory}
          currentSDG={this.props.currentSdg}
          data={this.props.data}
        />
      );
    });

    const style = { color: this.props.data[this.props.currentSdg].sdgColor };

    return (
      <div className="impactStories">
        <div className="targetSelector">
          <h3 style={style}>How the ILO is helping</h3>
          <ul className="bullets">
            {bullets}
          </ul>
        </div>
        <div className="stories-wrapper">
          <div>
            <div className="title-blurb-wrapper">
              <a
                href={this.props.impactStories[this.props.currentStory].url}
                target="_blank"
              >
                <h2>
                  {this.props.impactStories[this.props.currentStory].title}
                </h2>
              </a>
              <p>{this.props.impactStories[this.props.currentStory].blurb}</p>
            </div>
          </div>
          <div className="thumbnail-wrapper">
            <a
              href={this.props.impactStories[this.props.currentStory].url}
              target="_blank"
            >
              <img
                className="thumbnail"
                src={this.props.impactStories[this.props.currentStory].imageUrl}
              />
            </a>
            <Arrow
              item={this.props.currentStory}
              set={this.props.impactStories}
              setItem={this.props.selectStory}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default ImpactStories;

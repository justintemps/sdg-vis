/**
 * ImpactStories
 * Child to ViewerWindowContent
 * Parent to Bullet, ShareWidget
 */

import React from 'react';
import Bullet from '../Bullet/Bullet.jsx';
import ImpactStory from '../ImpactStory/ImpactStory.jsx';
import axios from 'axios';

const ImpactStories = React.createClass({
  getInitialState() {
    return {
      stories: []
    };
  },

  componentWillReceiveProps() {
    const url = `https://api.ilo-sdgs.online/stories/sdg/${this.props
      .currentSdg}`;
    axios(url).then(res => {
      this.setState({ stories: res.data[0].stories });
    });
  },

  componentDidMount() {
    const url = `https://api.ilo-sdgs.online/stories/sdg/${this.props
      .currentSdg}`;
    axios(url).then(res => {
      this.setState({ stories: res.data[0].stories });
    });
  },

  impactStory() {
    const { currentStory } = this.props;
    if (this.state.stories.length > 0) {
      return (
        <ImpactStory
          title={this.state.stories[currentStory].title}
          blurb={this.state.stories[currentStory].description}
          imageUrl={this.state.stories[currentStory].thumbnail}
          url={this.state.stories[currentStory].url}
          currentStory={this.props.currentStory}
          impactStories={this.props.impactStories}
          selectStory={this.props.selectStory}
        />
      );
    }
  },

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
          <ul className="bullets">{bullets}</ul>
        </div>
        {this.impactStory()}
      </div>
    );
  }
});

export default ImpactStories;

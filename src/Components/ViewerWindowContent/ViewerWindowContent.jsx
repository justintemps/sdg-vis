/**
 * ViewerWindowContent
 * Parent to FocusTargets, ImpactStories
 */

import React from 'react';
import DefaultViewerWindowContent from './DefaultViewerWindowContent.jsx';

const ViewerWindowContent = React.createClass({
  render() {
    // If current SDG is 0, show the default screen, otherwise show Focus Targets, Impact Stories
    if (this.props.currentSdg === 0) {
      return (
        <DefaultViewerWindowContent
          isModalOpen={this.props.isModalOpen}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
      );
    } else {
      return (
        <div
          className="viewerWindowContent"
          style={{ border: '1px solid red' }}
        >
          Viewer Window Content goes here
        </div>
      );
    }
  }
});

export default ViewerWindowContent;

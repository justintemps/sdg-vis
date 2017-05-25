/**
 * ViewerWindow
 * Parent to TitleBar, ViewerWindowContent
 */

import React from 'react';
import ViewerWindowContent
  from '../ViewerWindowContent/ViewerWindowContent.jsx';
import Modal from '../Modal/Modal.jsx';

const ViewerWindow = React.createClass({
  mountModal() {
    if (this.props.isModalOpen) {
      return (
        <Modal closeModal={this.props.closeModal}>
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/mZpyJwevPqc?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;modestbranding=1"
              frameBorder="0"
            />
          </div>
        </Modal>
      );
    }
  },

  requestFullscreen(e) {
    document.body.webkitRequestFullscreen();
  },

  render() {
    return (
      <div className="viewerWindow">
        <ViewerWindowContent {...this.props} />
        {this.mountModal()}
        <button onClick={this.requestFullscreen}>
          Click me for full screen!
        </button>
      </div>
    );
  }
});

export default ViewerWindow;

/*
?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;wmode=opaque
*/

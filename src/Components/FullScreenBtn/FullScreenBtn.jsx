import React from 'react';

class FullScreenBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: true };
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.handleScreenChange = this.handleScreenChange.bind(this);
  }

  hideButton() {
    this.setState({ shown: false });
  }

  showButton() {
    this.setState({ shown: true });
  }

  addHandler(e) {
    document.addEventListener(
      'webkitfullscreenchange',
      this.handleScreenChange
    );
  }

  handleScreenChange(e) {
    this.showButton();
    document.removeEventListener('webkitfullscreenchange', this.addHandler);
    document.removeEventListener(
      'webkitfullscreenchange',
      this.handleScreenChange
    );
  }

  requestFullscreen(e) {
    document.body.webkitRequestFullscreen();
    this.hideButton();
    // As soon as the screen has changed add another handler to wait for it to change back again
    // When it has, show the button and remove the two listeners
    document.addEventListener('webkitfullscreenchange', this.addHandler);
  }

  render() {
    return (
      <button
        style={this.state.shown === false ? {display: 'none'} : {display: 'initial'}}
        className="fullScreenBtn"
        onClick={this.requestFullscreen}
      >
        Full screen
      </button>
    );
  }
}

export default FullScreenBtn;

import React from 'react';
import ViewerWindowContent
  from '../ViewerWindowContent/ViewerWindowContent.jsx';
import DefaultViewerWindowContent
  from '../ViewerWindowContent/DefaultViewerWindowContent.jsx';
import getData from '../../../libs/googleSheets-client.js';
import Modal from '../Modal/Modal.jsx';

class ViewerWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], currentVideo: '' };
    this.currentView = this.currentView.bind(this);
    this.mountModal = this.mountModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        videos: data });
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  updateVideo(vid) {
    this.setState({
      currentVideo: vid
    });
  }

  mountModal() {
    if (this.state.modalIsOpen) {
      return <Modal currentVideo={this.state.currentVideo} closeModal={this.closeModal} />;
    }
  }

  currentView(sdg) {
    if (sdg === 0) {
      return <DefaultViewerWindowContent />;
    } else {
      return (
        <ViewerWindowContent
          currentSdg={this.props.currentSdg}
          videos={this.state.videos}
          openModal={this.openModal}
          updateVideo={this.updateVideo}
        />
      );
    }
  }

  render() {
    return (
      <div className="viewerWindow">
        {this.currentView(this.props.currentSdg)}
        {this.mountModal()}
      </div>
    );
  }
}

export default ViewerWindow;

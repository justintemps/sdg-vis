import React from 'react';
import ViewerWindowContent
  from '../ViewerWindowContent/ViewerWindowContent.jsx';
import DefaultViewerWindowContent
  from '../ViewerWindowContent/DefaultViewerWindowContent.jsx';
import Modal from '../Modal/Modal.jsx';

class ViewerWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.mountModal = this.mountModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.currentView = this.currentView.bind(this);
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

  mountModal() {
    if (this.state.modalIsOpen) {
      return <Modal closeModal={this.closeModal} />;
    }
  }

  currentView(sdg) {
    if (sdg === 0) {
      return (
        <DefaultViewerWindowContent />
      );
    } else {
      return (
        <ViewerWindowContent
          isModalOpen={this.state.modalIsOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
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

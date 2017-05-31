import React from 'react';
import Carousel from '../Carousel/Carousel.jsx';
import Modal from '../Modal/Modal.jsx';


class ViewerWindowContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.mountModal = this.mountModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    return (
      <div className='viewerWindowContent'>
        <Carousel {...this.props}/>
      </div>
    );
  }
}

export default ViewerWindowContent;

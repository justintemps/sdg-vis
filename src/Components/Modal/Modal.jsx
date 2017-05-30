import React from 'react';

const Modal = props => {
  return (
    <div>
      <div id="modal-backdrop" onClick={props.closeModal} />
      <div className="modal">
        <div className="iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/mZpyJwevPqc?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;modestbranding=1"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

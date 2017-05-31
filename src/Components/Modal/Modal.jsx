import React from 'react';

const Modal = props => {

  const BASE = 'https://www.youtube.com/embed/';
  const youtubeid = props.currentVideo;
  const QUERY = '?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=1&amp;modestbranding=1';
  const url = [BASE, youtubeid, QUERY].join('');

  return (
    <div>
      <div id="modal-backdrop" onClick={props.closeModal} />
      <div className="modal">
        <div className="iframe-wrapper">
          <iframe
            src={url}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

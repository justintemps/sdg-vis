import React from 'react';

function DefaultViewerWindowContent(props) {
  return (
    <div className="defaultViewerWindowContent">
      <div>
        <h1>Touch the icons</h1>
        <p>
          to learn how the ILO is working to acheive the Sustainable Deverlopment Goals
        </p>
      </div>
      <div>
        <img className='gglogo' src={require(`!file-loader!../../images/gglogo.svg`)} />
      </div>
    </div>
  );
}

export default DefaultViewerWindowContent;

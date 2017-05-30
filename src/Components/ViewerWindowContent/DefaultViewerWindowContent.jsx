import React from 'react';

function DefaultViewerWindowContent(props) {
  return (
    <div className="defaultViewerWindowContent">
      <div>
        <h1>Touch the goals</h1>
        <p>
          to learn how the ILO is working to achieve the 2030 Sustainable Development Agenda
        </p>
      </div>
      <div>
        <img
          className='gglogo'
          src={require('!file-loader!../../images/gglogo.svg')}
        />
      </div>
    </div>
  );
}

export default DefaultViewerWindowContent;

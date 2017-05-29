/**
 * ViewerWindowContent
 */

import React from 'react';

const DefaultViewerWindowContent = React.createClass({
  render() {
    return (
      <div className="defaultViewerWindowContent">
        <div>
          <h1>How does ILO help to achieve the Sustainable Development Goals?</h1>
          <p>Touch the icons to learn how the ILO's work is critical to achieving all of the SDGs</p>
        </div>
        <div>
          <img className='sdgLogo' src={require('!file-loader!../../images/gglogo.svg')} />
        </div>
      </div>
    );
  }
});

export default DefaultViewerWindowContent;

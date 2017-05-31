import React from 'react';
import ViewerWindowContent
  from '../ViewerWindowContent/ViewerWindowContent.jsx';
import DefaultViewerWindowContent
  from '../ViewerWindowContent/DefaultViewerWindowContent.jsx';
import getData from '../../../libs/googleSheets-client.js';

class ViewerWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    this.currentView = this.currentView.bind(this);
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({ videos: data });
    });
  }

  currentView(sdg) {
    if (sdg === 0) {
      return <DefaultViewerWindowContent />;
    } else {
      return (
        <ViewerWindowContent
          currentSdg={this.props.currentSdg}
          videos={this.state.videos}
        />
      );
    }
  }

  render() {
    return (
      <div className="viewerWindow">
        {this.currentView(this.props.currentSdg)}
      </div>
    );
  }
}

export default ViewerWindow;

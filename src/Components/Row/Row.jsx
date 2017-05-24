import React from 'react';
import Icon from '../Icon/Icon.jsx';

const Row = React.createClass({
  icons: [],

  // Gets icons according to startFrom and numberIcons props passed from SDGExplorer
  getIcons() {
    this.icons = [];
    for (
      let i = this.props.startFrom;
      i < this.props.numberIcons + this.props.startFrom;
      i++
    ) {
      this.icons.push(
        <Icon
          color={this.props.data[i].sdgColor}
          currentSdg={this.props.currentSdg}
          key={i}
          rowChanged={this.props.rowChanged}
          sdgNumber={this.props.data[i].sdgNumber}
          selectSDG={this.props.selectSDG}
        />
      );
    }
  },

  render() {
    this.getIcons();
    return (
      <div className="row">
        <Icon
          color={this.props.data[1].sdgColor}
          currentSdg={this.props.currentSdg}
          key={1}
          rowChanged={this.props.rowChanged}
          sdgNumber={this.props.data[1].sdgNumber}
          selectSDG={this.props.selectSDG}
        />
      </div>
    );
  }
});

export default Row;

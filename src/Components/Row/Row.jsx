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
          icon={this.props.icons[i]}
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
        {this.icons}
      </div>
    );
  }
});

export default Row;

/*

<Icon
	sdgNumber={this.props.data[i].sdgNumber}
	key={i}
	color={this.props.data[i].sdgColor}
	sdgNameShort={this.props.data[i].sdgNameShort}
	selectSDG={this.props.selectSDG}
	currentSdg={this.props.currentSdg}
	rowChanged={this.props.rowChanged}
	icon={this.props.icons[i]}
/>

*/

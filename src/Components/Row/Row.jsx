import React from 'react';
import Icon from '../Icon/Icon.jsx';

// Gets icons according to startFrom and numberIcons props passed from SDGExplorer
function getIcons(props, icons=[]) {
  for (
    let i = props.startFrom;
    i < props.numberIcons + props.startFrom;
    i++
  ) {
    icons.push(
      <Icon
        color={props.data[i].sdgColor}
        currentSdg={props.currentSdg}
        key={i}
        rowChanged={props.rowChanged}
        sdgNumber={props.data[i].sdgNumber}
        selectSDG={props.selectSDG}
      />
    );
  }
}

function Row(props) {
  let icons = [];

  getIcons(props, icons);

  return (
    <div className="row">
      {icons}
    </div>
  );
}

export default Row;

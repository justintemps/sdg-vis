/**
 * Triangle
 * Child of TitleBar, Icon
 */

import React from 'react';

function Triangle(props) {
  const size = () => {
    return props.small ? 15 : 20;
  };

  const style = sdg => {
    if (sdg === 0) {
      return {
        borderLeft: `${size()}px solid transparent`,
        borderRight: `${size()}px solid transparent`,
        borderBottom: `${size()}px solid ${props.sdgColor}`
      };
    } else {
      return {
        borderLeft: `${size()}px solid transparent`,
        borderRight: `${size()}px solid transparent`,
        borderTop: `${size()}px solid ${props.sdgColor}`
      };
    }
  };

  const topOrBottom = sdg => {
    if (sdg === 0) {
      return 'up-triangle';
    } else {
      return 'down-triangle';
    }
  };

  return (
    <div
      className={topOrBottom(props.sdgNumber)}
      style={style(props.sdgNumber)}
    />
  );
}

export default Triangle;

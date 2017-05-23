/**
 * setRows
 * Utility fxs for determining the number of icons per row
*/

/**
 * numberIcons() decides how many icons to display in each row
 * @param {Number} row - the current row
 * @param {Boolean} top - is this for the top row?
 * @param {Boolean} isMobile - are we in mobile view?
 * @return {Number} number of icons to display
*/
function numberIcons(row, top, isMobile) {
  let numberIcons;

  switch (row) {
    case 0:
      if (isMobile) {
        numberIcons = top ? 3 : 15;
      } else {
        numberIcons = top ? 6 : 12;
      }

      break;
    case 1:
      if (isMobile) {
        numberIcons = top ? 6 : 12;
      } else {
        numberIcons = top ? 12 : 6;
      }
      break;
    case 2:
      if (isMobile) {
        numberIcons = top ? 9 : 9;
      } else {
        numberIcons = top ? 18 : 0;
      }
      break;
    case 3:
      numberIcons = top ? 12 : 6;
      break;
    case 4:
      numberIcons = top ? 15 : 3;
      break;
    case 5:
      numberIcons = top ? 18 : 0;
      break;
  }
  return numberIcons;
}

/**
 * startFrom() which number icon should the row start from?
 * @param {Number} row - the current row
 * @return {Number} num - the number of the icon to start with
 * @param {Boolean} isMobile - are we in mobile view?
*/
function startFrom(row, isMobile) {
  let num;
  switch (row) {
    case 0:
      num = isMobile ? 3 : 6;
      break;
    case 1:
      num = isMobile ? 6 : 12;
      break;
    case 2:
      num = isMobile ? 9 : 0;
      break;
    case 3:
      num = 12;
      break;
    case 4:
      num = 15;
      break;
    case 5:
      num = 18;
      break;
  }
  return num;
}

export { numberIcons, startFrom };

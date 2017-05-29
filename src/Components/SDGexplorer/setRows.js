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
  case -1:
    numberIcons = top ? 0 : 18;
    break;
  case 0:
    numberIcons = top ? 6 : 12;
    break;
  case 1:
    numberIcons = top ? 12 : 6;
    break;
  case 2:
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
  case -1:
    num = 0;
    break;
  case 0:
    num = 6;
    break;
  case 1:
    num = 12;
    break;
  case 2:
    num = 0;
    break;
  }
  return num;
}

export { numberIcons, startFrom };

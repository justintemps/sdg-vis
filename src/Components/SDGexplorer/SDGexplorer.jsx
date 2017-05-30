/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';
import Row from '../Row/Row.jsx';
import ViewerWindow from '../ViewerWindow/ViewerWindow.jsx';
import data from '!json!../../data.json';
import FullScreenBtn from '../FullScreenBtn/FullScreenBtn.jsx';
import { numberIcons, startFrom } from './setRows.js';

class SDGexplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSdg: 0,
      currentRow: -1,
      focusTarget: 0,
      rowChanged: false
    };
    this.selectSDG = this.selectSDG.bind(this);
    this.shiftRow = this.shiftRow.bind(this);
  }

  // Select a new SDG and change the row of necessary.
  // Also resets the current story and focus target
  selectSDG(sdg) {
    const rowDivisor = 6;
    let row;

    this.setState({
      currentSdg: sdg,
      rowChanged: sdg === 0 ||
        Math.floor(sdg / rowDivisor) !== this.state.currentRow
        ? true
        : false
    });

    // Shift the row if it changed
    // Set route to new sdg
    setTimeout(() => {
      row = sdg === 0 ? -1 : Math.floor(sdg / rowDivisor);
      this.shiftRow(row);
    }, 500);
  }

  // Determines the row underneath which the viwer window should be displayed
  shiftRow(row) {
    this.setState({
      currentRow: row
    });
  }

  render() {
    return (
      <div className="sdgExplorer">

        <FullScreenBtn />

        <Row
          startFrom={0}
          numberIcons={numberIcons(this.state.currentRow, true, false)}
          key={1}
          selectSDG={this.selectSDG}
          currentSdg={this.state.currentSdg}
          data={data}
          rowChanged={this.state.rowChanged}
        />

        <CSSTransitionGroup
          transitionName="sliding-viewer"
          transitionLeave={this.state.rowChanged}
          transitionEnter={this.state.rowChanged}
          transitionLeaveTimeout={500}
          transitionEnterTimeout={1200}
        >

          <ViewerWindow
            data={data}
            key={this.state.rowChanged ? this.state.currentSdg : 900}
            currentSdg={this.state.currentSdg}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />

        </CSSTransitionGroup>

        <Row
          startFrom={startFrom(this.state.currentRow, this.state.isMobile)}
          numberIcons={numberIcons(this.state.currentRow, false, false)}
          key={2}
          selectSDG={this.selectSDG}
          currentSdg={this.state.currentSdg}
          data={data}
          rowChanged={this.state.rowChanged}
        />
      </div>
    );
  }
}

export default SDGexplorer;

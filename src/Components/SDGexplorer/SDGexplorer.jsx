/**
 * SDGExplorer
 * Parent to Row, ViewerWindow
 * Owns state for the whole app
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Row from '../Row/Row.jsx';
import ViewerWindow from '../ViewerWindow/ViewerWindow.jsx';
import data from '!json!../../data.json';
import { numberIcons, startFrom } from './setRows.js';
import icons from '../Icon/icons.js';

const SDGexplorer = React.createClass({
  getInitialState() {
    return {
      currentSdg: 0,
      currentRow: 0,
      focusTarget: 0,
      isModalOpen: false,
      rowChanged: false
    };
  },

  componentDidMount() {
    document.body.addEventListener('touchstart', () => {
      this.toggleToolTip(false);
    });
    this.followRoute(window.location.hash);
  },

  openModal() {
    this.setState({ isModalOpen: true });
  },

  closeModal() {
    this.setState({ isModalOpen: false });
  },

  // Maps the route to the relevant SDG
  followRoute(route) {
    let r = parseInt(route.replace(/^\D+/g, ''));
    if (r >= 0 && r < 18) {
      const rowDivisor = this.state.isMobile ? 3 : 6;
      this.setState({
        currentSdg: r,
        currentRow: Math.floor(r / rowDivisor)
      });
    }
  },

  // Select a new SDG and change the row of necessary.
  // Also resets the current story and focus target
  selectSDG(sdg) {
    const rowDivisor = 6;

    this.setState({
      currentSdg: sdg,
      rowChanged: Math.floor(sdg / rowDivisor) !== this.state.currentRow
        ? true
        : false
    });

    // Shift the row if it changed
    // Set route to new sdg
    setTimeout(() => {
      this.shiftRow(Math.floor(sdg / rowDivisor));
    }, 500);
  },

  // Select the current focus target
  selectFocusTarget(focusTarget) {
    this.setState({
      focusTarget: focusTarget,
      longDescription: false
    });
  },

  // Determines the row underneath which the viwer window should be displayed
  shiftRow(row) {
    this.setState({
      currentRow: row
    });
  },

  render() {
    return (
      <div className="sdgExplorer">
        <Row
          startFrom={0}
          numberIcons={numberIcons(this.state.currentRow, true, false)}
          key={1}
          selectSDG={this.selectSDG}
          currentSdg={this.state.currentSdg}
          data={data}
          rowChanged={this.state.rowChanged}
          icons={icons()}
        />

        <ReactCSSTransitionGroup
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
            isModalOpen={this.state.isModalOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />

        </ReactCSSTransitionGroup>

        <Row
          startFrom={startFrom(this.state.currentRow, this.state.isMobile)}
          numberIcons={numberIcons(this.state.currentRow, false, false)}
          key={2}
          selectSDG={this.selectSDG}
          currentSdg={this.state.currentSdg}
          data={data}
          rowChanged={this.state.rowChanged}
          icons={icons()}
        />
      </div>
    );
  }
});

export default SDGexplorer;

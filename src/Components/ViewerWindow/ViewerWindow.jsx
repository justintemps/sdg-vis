/**
 * ViewerWindow
 * Parent to TitleBar, ViewerWindowContent
 */

import React from "react";
import TitleBar from "../TitleBar/TitleBar.jsx";
import ViewerWindowContent from "../ViewerWindowContent/ViewerWindowContent.jsx";
import Modal from "../Modal/Modal.jsx";


const ViewerWindow = React.createClass({

	render() {
		const titleBar = <TitleBar
			sdgNumber={this.props.data[this.props.currentSdg].sdgNumber}
			sdgName={this.props.data[this.props.currentSdg].sdgName}
			sdgColor= {this.props.data[this.props.currentSdg].sdgColor}
			getVPwidth={this.props.getVPwidth}
		/>;

		return (
			<div className="viewerWindow">
				{titleBar}
				<ViewerWindowContent {...this.props} />
				<Modal isModalOpen={this.props.isModalOpen}>
					<div className="iframe-wrapper">
						<iframe
							src="https://www.youtube.com/embed/mZpyJwevPqc?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=0"
							frameBorder="0"
						/>
					</div>
				</Modal>
			</div>
		);
	}
});

export default ViewerWindow;

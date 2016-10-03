/**
 * FocusTargets
 * Parent to Bullet
 */

import React from "react";
import Bullet from "../Bullet/Bullet.jsx";
import Arrow from "../Arrow/Arrow.jsx";
import Description from "../Description/Description.jsx";

const FocusTargets = React.createClass({

	render() {

		const heading = "Where Decent Work comes in";

		const bullets = this.props.iloTargets.map( (target, i) =>
			<Bullet type="focusTarget"
				key={i}
				id={i}
				focusTarget={this.props.focusTarget}
				selectFocusTarget={this.props.selectFocusTarget}
				currentSDG = {this.props.currentSdg}
				data = {this.props.data}
			/>
		);

		const style = {color: this.props.data[this.props.currentSdg].sdgColor};

		return (
			<div className="focusTargets">
					<div>
						<div className="targetSelector">
							<h3 style={style}>{heading}</h3>
							<ul className="bullets">
								{bullets}
							</ul>
						</div>
						<div className="target-description-wrapper">
							<Description
								focusTarget={this.props.focusTarget}
								description={this.props.iloTargets[this.props.focusTarget].description}
								targetNumber={this.props.iloTargets[this.props.focusTarget].number}
								color={this.props.data[this.props.currentSdg].sdgColor}
								longDescription={this.props.longDescription}
								setLongDescription={this.props.setLongDescription}
								toggleToolTip={this.props.toggleToolTip}
								toolTipVisible={this.props.toolTipVisible}
							/>
							<Arrow
								item={this.props.focusTarget}
								set={this.props.iloTargets}
								setItem={this.props.selectFocusTarget}
							/>
					</div>
				</div>
			</div>
		);
	}
});

export default FocusTargets;

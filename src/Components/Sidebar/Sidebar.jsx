import React from "react";

const Sidebar = React.createClass({
	render() {
		return(
			<div className="sidebar">
				<h4>
					<a href="/global/topics/sdg-2030/lang--en/index.htm">
						The 2030 development agenda&nbsp;
					</a>
				</h4>
				<ol role="menu" className="l_tinynav1">
					<li className="">
						<a href="/global/topics/sdg-2030/goal-8/lang--en/index.htm" className="" role="menuitem">Goal #8: Decent work and economic growth&nbsp;<span className="linked fa fa-angle-right"></span></a>
					</li>
					<li className="">
						<a href="/global/topics/sdg-2030/latest/lang--en/index.htm" className="" role="menuitem">News and events&nbsp;<span className="linked fa fa-angle-right"></span></a>
					</li>
					<li className="">
						<a href="/global/topics/sdg-2030/resources/lang--en/index.htm" className="" role="menuitem">Background resources&nbsp;<span className="linked fa fa-angle-right"></span></a>
					</li>
					<li className="">
						<a href="/global/topics/sdg-2030/help-achieve/lang--en/index.htm" className="" role="menuitem">How will you help achieve the Sustainable Development Goals at work?&nbsp;<span className="linked fa fa-angle-right"></span></a>
					</li>
				</ol>
				<div className="furniture feature-multiple slim-bar">
					<h4>Receive ILO news<span className="fa fa-envelope"></span></h4>
						<div className="freeform text">
							<form acceptCharset="UTF-8" method="post" action="http://ilo.msgfocus.com/k/Ilo/news_updates">
								<p>Send us your email and get ILO news delivered weekly straight to your mailbox</p>
								<div className="input-container">
									<div id="amf-el-email_37" className="amf-el amf-type-textbox">
										<div className="amf-el-inner">
											<input type="text" maxLength="255" id="amf-input-email_37" name="email_37" className="search" />
										</div>
									</div>
									<input type="hidden" value="form_website" id="amf-hidden-lead_source_48" name="lead_source_48" />
									<input type="hidden" value="en" id="amf-hidden-language_49" name="language_49" />
									<div id="amf-el-submit" className="amf-el amf-type-button">
										<input type="submit" value="Submit" id="submit" name="submit" className="butt" />
									</div>
								</div>
							</form>
						</div>
					</div>
			</div>
		);
	}
});

export default Sidebar;

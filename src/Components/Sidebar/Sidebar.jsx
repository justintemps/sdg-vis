import React from "react";

const Sidebar = React.createClass({
	render() {
		return(
			<div className="sidebar">
				<h4>
					The 2030 development agenda&nbsp;
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
					<h4>Further information</h4>
					<ol className="item-list">
						<li>
							<a target="" href="/global/topics/decent-work/lang--en/index.htm">ILO portal on Decent Work&nbsp;<span className="linked fa fa-angle-right"></span></a>
						</li>
					</ol>
					<h5>Contact us</h5>
					<ol className="item-list">
						<li>
							<a target="" href="mailto:communication@ilo.org">communication@ilo.org&nbsp;<span className="linked fa fa-angle-right"></span></a>
						</li>
					</ol>
					<h5>U.N. Knowledge platform on sustainable development</h5>
					<ol className="item-list">
						<li>
							<a href="https://sustainabledevelopment.un.org/" target="">sustainabledevelopment.un.org&nbsp;<span className="linked fa fa-angle-right"></span></a>
						</li>
					</ol>
				</div>
				<div className="furniture feature-multiple text-wrap text-wrap-img-left no-img-scale standard-bar">
					<ol className="item-list ">
						<li className="highlight">
							<a target="" href="/global/topics/sdg-2030/resources/WCMS_436923/lang--en/index.htm" className="item-image">
								<img src="http://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/documents/image/wcms_486800.jpg" alt="" />
							</a>
							<span className="caption"></span>
							<p className="item-prehead">Brochure</p>
							<h5 className="item-title">
								<a target="" href="/global/topics/sdg-2030/resources/WCMS_436923/lang--en/index.htm">Decent work, a key to the 2030 agenda for sustainable development&nbsp;<span className="linked fa fa-angle-right"></span>
								</a>
							</h5>
							<p className="item-info">‎pdf -&nbsp;&nbsp;2.1 MB‎</p>
						</li>
					</ol>
				</div>
			</div>
		);
	}
});

export default Sidebar;

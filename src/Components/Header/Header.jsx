import React from "react";

const Header = React.createClass({

	render() {
		return (
			<header id="banner" role="banner">
				<div id="primary-banner">
					<div className="container">
						<div className="header-row">
							<div className="large-6-col">
								<a id="logo" className="navbar-brand" href="/global/lang--en/index.htm"></a>
							</div>
							<div className="large-6-col">
								<h2>Promoting Jobs, Protecting People</h2>
								<h3>ILO is a specialised agency of the <a href="http://www.un.org/en/aboutun/structure/">United Nations</a></h3>
								<div className="language">
									<a href="/global/lang--fr/index.htm">français</a>
									|
									<a href="/global/lang--es/index.htm">español</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="secondary-banner">
					<div className="container">
						<div className="header-row">
							<div className="large-7-col">
								<nav role="navigation">
									<div>
										<ul role="menu" className="nav navbar-nav">
											<li className="fast-nav" role="menuitem">Fast Navigation:</li>
											<li className="dropdown regions" role="menuitem">
												<a href="/global/regions/lang--en/index.htm">Countries</a>
											</li>
											<li className="dropdown" role="menuitem">
												<a href="/global/topics/lang--en/index.htm">Topics</a>
											</li>
											<li className="dropdown" role="menuitem">
												<a href="global/industries-and-sectors/lang--en/index.htm">Sectors</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="large-5-col small-12-col">
								<span id="searchGlobal">
									<form role="search" className="form-search pull-right" method="get" action="http://www.ilo.org/Search4/search.do" name="searchFast_up">
										<input type="hidden" id="sitelang" name="sitelang" value="en" />
										<input type="hidden" id="locale" name="locale" value="en_EN" />
										<input type="hidden" name="consumercode" value="ILOHQ_STELLENT_PUBLIC" />
										<label htmlFor="keywords">Search:</label>
										<input type="text" id="searchWhat" className="input-medium search-query" placeholder="Search ilo.org" name="searchWhat" />
										<input type="hidden" id="searchLanguage" name="searchLanguage" value="en" />
										<button className="btn menu-trigger" type="submit">Search</button>
									</form>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div id="tertiary-banner">
					<div className="container">
						<div className="header-row">
							<nav className="large-12-col" role="navigation">
								<a className="navbar-toggle" href="#">
									<div className="pull-left">
										<span className="menu">Menu</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</div>
								</a>
								<div className="collapse">
									<ul role="menu" className="nav navbar-nav" id="menu">
										<li role="menuitem" className=""><a href="/global/lang--en/index.htm"><span className="home-link">Home</span><span className="icon-home"></span></a></li>
										<li role="menuitem" className=""><a href="/global/about-the-ilo/lang--en/index.htm">About the ILO</a></li>
										<li role="menuitem" className="here"><a href="/global/about-the-ilo/newsroom/lang--en/index.htm">Newsroom</a></li>
										<li role="menuitem" className=""><a href="/global/meetings-and-events/lang--en/index.htm">Meetings and events</a></li>
										<li role="menuitem" className=""><a href="/global/publications/lang--en/index.htm">Publications</a></li>
										<li role="menuitem" className=""><a href="/global/research/lang--en/index.htm">Research</a></li>
										<li role="menuitem" className=""><a href="/global/standards/lang--en/index.htm">Labour standards</a></li>
										<li role="menuitem" className=""><a href="/global/statistics-and-databases/lang--en/index.htm">Statistics and databases</a></li>
										<li role="menuitem" className=""><a href="/global/contact-us/lang--en/index.htm">Contact Us</a></li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

export default Header;

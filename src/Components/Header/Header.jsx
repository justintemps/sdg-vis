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
										<a href="/global/lang--es/index.htm">español</a>
									</div>
							</div>

						</div>
					</div>
				</div>
			</header>
		);
	}
});

export default Header;

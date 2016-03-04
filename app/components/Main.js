import React from "react";
import { Link } from "react-router";

export default ( { children } )  => (
	<div className="main-container">
		<h1>React Prototype</h1>
		<nav className="navbar navbar-default" role="navigation">
			<div className="col-sm-7 col-sm-offset-2">
				<li><Link to="/page1">page1</Link></li>
		  		<li><Link to="/page2">page2</Link></li>
			</div>
		</nav>
		{children}
	</div>
)

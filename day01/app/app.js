import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from "react-router";
import routes from "./config/routes";
import Footer from "./components/Footer";

// App
ReactDOM.render(
	<Router history={hashHistory}>
		{routes}
	</Router>,
	document.getElementById("app")
);

// Footer
ReactDOM.render(
	<Footer/>,
	document.getElementById("footer")
);

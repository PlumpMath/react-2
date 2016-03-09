import React from "react";
import Main from "../components/Main";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import NotFound from "../components/NotFound";
import DefaultPage from "../components/DefaultPage";
import { Route, IndexRoute } from "react-router";

export default (
	<Route path="/" component={Main}>
		<Route path="/page1" component={Page1} />
		<Route path="/page2" component={Page2} />
		<Route path="/*" component={NotFound} />
		<IndexRoute component={DefaultPage}/>
	</Route>
);

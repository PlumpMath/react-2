import React, { PropTypes } from "react";
import { Link } from "react-router";

class Main extends React.Component {
	// getDefaultProps() {
	// 	console.info("Step 1 (invoked once) => GetDefaultProps");
	// }
	// getInitialState() {
	// 	console.info("Step 2 (invoked once) => GetInitialState");
	// 	return { text: "" };
	// }
    constructor(props) {
    	super(props);
    	this.state = {test: 1};
    }
	componentWillMount() {
		console.info("Step 3 (invoked once) => ComponentWillMount");
	}
	render() {
		console.info("Step 4 (invoked multiple times) => Render");
		return (
			<div className="main-container">
				<h1>React Prototype</h1>
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2">
						<li><Link to="/page1">page1</Link></li>
				  		<li><Link to="/page2">page2</Link></li>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
	componentDidMount() {
		console.info("Step 5 (invoked once) => ComponentDidMount");
	}
	componentWillUnmount() {
		console.info("Step 6 (invoked once) => ComponentWillUnmount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Step 1 (invoked multiple times) => ComponentWillReceiveProps");
		console.log(nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Step 2 (invoked multiple times) => ShouldComponentUpdate");
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("Step 3 (invoked multiple times) => ComponentWillUpdate");
		console.log("nextProps:");
		console.log(nextProps);
		console.log("nextState:");
		console.log(nextState);
	}
	componentDidUpdate(previousProps, previousState) {
		console.log("Step 5 (invoked multiple times) => ComponentDidUpdate");
		console.log("previousProps:");
		console.log(previousProps);
		console.log("previousState:");
		console.log(previousState);
	}
}
Main.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    initialQty: PropTypes.number
};
Main.defaultProps = {
    title: 'Undefined Product',
    price: 100,
    initialQty: 0
};

export default Main;

// export default ( { children } )  => (
// 	<div className="main-container">
// 		<h1>React Prototype</h1>
// 		<nav className="navbar navbar-default" role="navigation">
// 			<div className="col-sm-7 col-sm-offset-2">
// 				<li><Link to="/page1">page1</Link></li>
// 		  		<li><Link to="/page2">page2</Link></li>
// 			</div>
// 		</nav>
// 		{children}
// 	</div>
// )

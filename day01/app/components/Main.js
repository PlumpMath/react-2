import React, { PropTypes } from "react";
import { Link } from "react-router";

// ES6 방식
class Main extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
	   		message: "이 페이지는 react의 기능을 확인하기 위한 프로토타입 페이지입니다.",
	   		name : "Main"
	   	};
    }
	componentWillMount() {
		console.info("[invoked once] => ComponentWillMount");
	}
	render() {
		console.warn("[invoked multiple times] => Render");
		var list = this.props.pagelist.map((v, i) => {
			return <li key={i}><Link to={v.url}>{v.text}</Link></li>
		});
		return (
			<div className="main-container">
				<h1>{this.props.title}</h1>
				<p>{this.state.message}</p>
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2">
						{list}
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
	componentDidMount() {
		console.info("[invoked once] => ComponentDidMount");
	}
	componentWillUnmount() {
		console.info("[invoked once] => ComponentWillUnmount");
	}
	componentWillReceiveProps(nextProps) {
		console.log("Step 1 => ComponentWillReceiveProps", nextProps);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Step 2 => ShouldComponentUpdate");
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("Step 3 => ComponentWillUpdate", "nextProps:",nextProps,"nextState:",nextState);
	}
	componentDidUpdate(previousProps, previousState) {
		console.log("Step 4 => ComponentDidUpdate", "previousProps:",previousProps,"previousState:",previousState);
	}
}
Main.defaultProps = {
    title: "React prototype (props 테스트)",
    pagelist: [{
    	url : "/page1",
    	text : "페이지1로 이동"
    }, {
    	url : "/page2",
    	text : "페이지2로 이동"
    }]
};
Main.propTypes = {
    title: PropTypes.string.isRequired,
    pagelist: PropTypes.array
};

// ES5 방식
// var Main = React.createClass({
// 	propTypes: {
// 	    title: PropTypes.string.isRequired,
// 	    pagelist: PropTypes.array
// 	},
// 	getDefaultProps:function() {
// 		console.info("[invoked once] => GetDefaultProps");
// 		return {
// 		    title: "React prototype (테스트)",
// 		    pagelist: [{
// 		    	url : "/page1",
// 		    	text : "페이지1로 이동"
// 		    }, {
// 		    	url : "/page2",
// 		    	text : "페이지2로 이동"
// 		    }]
// 		};
// 	},
// 	getInitialState:function() {
// 		console.info("[invoked once] => GetInitialState");
// 		return {
// 	   		message: "이 페이지는 react의 기능을 확인하기 위한 프로토타입 페이지입니다.",
//	   		name : "Main"
// 	   	};
//     },
// 	componentWillMount:function() {
// 		console.info("[invoked once] => ComponentWillMount");
// 	},
// 	render:function() {
// 		console.warn("[invoked multiple times] => Render");
// 		var list = this.props.pagelist.map((v, i) => {
// 			return <li key={i}><Link to={v.url}>{v.text}</Link></li>
// 		});
// 		return (
// 			<div className="main-container">
// 				<h1>{this.props.title}</h1>
// 				<p>{this.state.message}</p>
// 				<nav className="navbar navbar-default" role="navigation">
// 					<div className="col-sm-7 col-sm-offset-2">
// 						{list}
// 					</div>
// 				</nav>
// 				{this.props.children}
// 			</div>
// 		);
// 	},
// 	componentDidMount:function() {
// 		console.info("[invoked once] => ComponentDidMount");
// 	},
// 	componentWillUnmount:function() {
// 		console.info("[invoked once] => ComponentWillUnmount");
// 	},
// 	componentWillReceiveProps:function(nextProps) {
// 		console.log("Step 1 => ComponentWillReceiveProps", nextProps);
// 	},
// 	shouldComponentUpdate:function(nextProps, nextState) {
// 		console.log("Step 2 => ShouldComponentUpdate");
// 		return true;
// 	},
// 	componentWillUpdate:function(nextProps, nextState) {
// 		console.log("Step 3 => ComponentWillUpdate", "nextProps:",nextProps,"nextState:",nextState);
// 	},
// 	componentDidUpdate:function(previousProps, previousState) {
// 		console.log("Step 4 => ComponentDidUpdate", "previousProps:",previousProps,"previousState:",previousState);
// 	}
// });


// Stateless Functional Components
// var Main = ({ title, pagelist, children })  => {
// 	var list = pagelist.map((v, i) => {
// 		return <li key={i}><Link to={v.url}>{v.text}</Link></li>
// 	})
// 	return (
// 		<div className="main-container">
// 			<h1>{title}</h1>
// 			<nav className="navbar navbar-default" role="navigation">
// 				<div className="col-sm-7 col-sm-offset-2">
// 					{list}
// 				</div>
// 			</nav>
// 			{children}
// 		</div>
// 	);
// };

// Main.defaultProps = {
//     title: "React prototype (props 테스트)",
//     pagelist: [{
//     	url : "/page1",
//     	text : "페이지1로 이동"
//     }, {
//     	url : "/page2",
//     	text : "페이지2로 이동"
//     }]
// };
// Main.propTypes = {
//     title: PropTypes.string.isRequired,
//     pagelist: PropTypes.array
// };

export default Main;
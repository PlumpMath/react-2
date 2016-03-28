import React, { Component } from 'react';
import { render } from 'react-dom';
import DoStore from './DoStoreExStore';
import DoAction from './DoAction';

class App extends Component {
	constructor(){
		super(...arguments);
		DoAction.createList();
		this.state = {
			jobList : DoStore.getState()
		};
	}
	
	componentDidMount(){
		this.storeSubscription = DoStore.addListener(data => this.handleStoreChange(data));
	}

	componentWillMount(){
		if(this.storeSubscription){
			this.storeSubscription.remove();
		}
	}

	handleStoreChange(){
		this.setState({jobList : DoStore.getState()});
	}

	_createJob(event){
		DoAction.createDo(this.refs.text.value);
		this.refs.text.value = "";
	}
	_deleteJob(event){
		event.preventDefault();
		let index = event.target.getAttribute("data-index");
		DoAction.deleteDo(Number(index));
	}
	_getJobList(){
		const jobList = this.state.jobList;

		return jobList.map((job, index) => {
			return (<li key={ index }> {job} <span><a href="#" data-index={ index } onClick={ this._deleteJob.bind(this) }>Delete</a></span></li>)
		});
	};
	

	render(){
		return (
			<div>
			<header>ToDO App</header>
		<span>do Action : </span><input type="text" ref="text" name="job"/> <button onClick={ this._createJob.bind(this) }>Insert</button>
		<ul>
			{ this._getJobList() }			
		</ul>
			</div>
		);
	}
}


render(<App />, document.getElementById('root'));
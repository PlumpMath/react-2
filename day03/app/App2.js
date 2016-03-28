import React, { Component } from 'react';
import { render } from 'react-dom';
import {Container} from 'flux/utils';
import DoStoreEx from './DoStoreExStore';
import DoAction from './DoAction';

class App2 extends Component {
	constructor(){
		super(...arguments);
		DoAction.createList();
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


	render(){
		const itemList = this.state.jobList.map((job, index) => {
			return (<li key={ index }> {job} <span><a href="#" data-index={ index } onClick={ this._deleteJob.bind(this) }>Delete</a></span></li>)
		});
		return (
			<div>
				<header>ToDO App</header>
				<span>do Action : </span><input type="text" ref="text" name="job"/> <button onClick={ this._createJob.bind(this) }>Insert</button>
				<ul>
					{ itemList }
				</ul>
			</div>
		);
	}
}

App2.getStores = () => ([DoStoreEx]);
App2.calculateState = (prevState) => ({jobList : DoStoreEx.getState()});

const AppContainer = Container.create(App2, {pure: false} );

render(<AppContainer />, document.getElementById('root'));
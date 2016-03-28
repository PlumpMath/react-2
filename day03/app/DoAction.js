import AppDispatcher from './AppDispatcher';
import Constants from './Constants';

let DoAction = {

	createList(){
		AppDispatcher.dispatch({
			type : Constants.DO_CREATE
		});
	},

	createDo(jobStr){
		AppDispatcher.dispatch({
			type : Constants.DO_INSERT,
			job : jobStr
		});
	},

	deleteDo(jobIndex){
		AppDispatcher.dispatch({
			type : Constants.DO_DELETE,
			jobIndex : jobIndex
		});
	}
};

export default DoAction;
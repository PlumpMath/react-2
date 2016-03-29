import {Store} from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import Constants from './Constants';

let jobList = [];

class DoStore extends Store{
	getState(){
		return jobList;
	}

	__onDispatch(action){
		switch(action.type){
			case Constants.DO_CREATE :
				jobList = [];
				this.__emitChange();
				//__emitter.emit(UPDATE_EVENT);
				break;
			case Constants.DO_INSERT :
				jobList.push(action.job);
				//__emitter.emit(UPDATE_EVENT);
				this.__emitChange();
				break;
			case Constants.DO_DELETE :
				jobList = jobList.filter(function(val, index){
					return index !== action.jobIndex;
				});
				//__emitter.emit(UPDATE_EVENT);
				this.__emitChange();
				break;
			default :
				return jobList;
		}
	}

}



export default new DoStore(AppDispatcher);
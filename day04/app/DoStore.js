import {EventEmitter} from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import Constants from './Constants';

const UPDATE_EVENT = "update";
let __emitter = new EventEmitter();
let jobList = [];

let DoStore = {
	
	getState(){
		return jobList;
	},	
	addLitener(callback){
		return __emitter.addListener(UPDATE_EVENT, callback);
	}
	
};

DoStore.dispatchToken = AppDispatcher.register((action) => {
		switch(action.type){
			case Constants.DO_CREATE :
				jobList = [];
				__emitter.emit(UPDATE_EVENT);
				break;
			case Constants.DO_INSERT :
				jobList.push(action.job);
				__emitter.emit(UPDATE_EVENT);
				break;
			case Constants.DO_DELETE :
				jobList = jobList.filter(function(val, index){
					return index !== action.jobIndex;
				});
				__emitter.emit(UPDATE_EVENT);
				break;
		}
	});

export default DoStore;
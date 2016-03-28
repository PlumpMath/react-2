import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher{
	dispatch(action = {}){
		console.log("DISPATCH", action);
		super.dispatch(action);
	}
}

export default new AppDispatcher();
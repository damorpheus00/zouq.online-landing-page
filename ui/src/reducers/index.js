import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

// eslint-disable-next-line import/no-anonymous-default-export
export default history =>
	combineReducers({
		form: formReducer,
		router: connectRouter(history),
	});

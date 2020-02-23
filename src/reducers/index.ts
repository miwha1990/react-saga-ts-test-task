import { combineReducers } from 'redux';
import { userReducer, IUserReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer
});

export interface IState {
  user: IUserReducer
}

export default rootReducer;

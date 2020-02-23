import { AnyAction } from "redux";
import {
  SET_USER,
  REMOVE_USER
} from "../actions/user/userConstants";

export interface IUserReducer {
  user?: any
}

const initialState = {
  user: localStorage.getItem('user')
};

const userReducer = (state = initialState, action: AnyAction): IUserReducer => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
};

export { userReducer };

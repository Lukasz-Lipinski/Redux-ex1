import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';


import counterReducer from "./counter/redux";
import postReducer from "./posts/containers/redux";
import usersReducer from "./users/containers/redux";
import uiReducer from "./ui/redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  posts: postReducer,
  ui: uiReducer,
  form: formReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./slices/auth";
import modalReducer from "./slices/modal";
import loaderReducer from "./slices/loader";


const appReducer = combineReducers({
  form: formReducer,

  auth: authReducer,
  modal: modalReducer,
  loader: loaderReducer,

});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout") state = {};
  return appReducer(state, action);
};

export default rootReducer;

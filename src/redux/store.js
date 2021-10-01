import { applyMiddleware, createStore } from "redux";
 import logger from "redux-logger";
import rootReducer from "./root.reducer";
// import thunk from "redux-thunk";
// import { fetchUsers } from "./user/user.action";

const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares));
// store.subscribe(()=> {console.log(store.getState())})
// store.dispatch(fetchUsers());
export default store;
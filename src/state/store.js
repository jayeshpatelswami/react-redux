import { applyMiddleware, legacy_createStore as createStore  } from "redux";
import reducers from "./reduser";
import thunk from "redux-thunk";


const store = createStore(reducers,{} , applyMiddleware(thunk))

export default store
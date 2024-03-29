import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import fileFolderReducer from "./reducers/filefoldersReducer";
const store = createStore(
    combineReducers({authReducer, fileFolderReducer})
    ,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
// import { combineReducers } from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceReducer from "./ice/iceReducers";

import { combineReducers } from "redux";
import userReducer from "./crudredux/crudReducer";

// const rootReducers=combineReducers({
//     cake:cakeReducer,
//     ice:iceReducer
// })
// export default rootReducers;

const rootReducer=combineReducers({
    data:userReducer
})
export default rootReducer;
// import { createStore, combineReducers } from "redux";

// const initialState = {
//   nilai: 0,
// };

// //reducer
// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "TAMBAH":
//       return { ...state, nilai: state.nilai + 1 };
//     case "KURANG":
//       return { ...state, nilai: state.nilai - 1 };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   count: countReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from "redux";
// logger redux
import logger from "redux-logger";
import rootReducer from "./reducer/index";
import promiseMiddleware from "redux-promise-middleware";

// persist storage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

const persisConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleware = applyMiddleware(logger, promiseMiddleware);

const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };

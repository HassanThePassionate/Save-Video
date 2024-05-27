// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggle/toggleSlice"; // Ensure the path is correct
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import qualityReducer from "./quality/qualitySlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  toggle: toggleReducer,
  quality: qualityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

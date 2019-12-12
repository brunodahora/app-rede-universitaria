import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";

import AppReducer from "./AppReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

export default persistCombineReducers(persistConfig, {
  app: AppReducer
});

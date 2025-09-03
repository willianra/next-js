import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tereaReducer   from "./tareaSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const rootReducer = combineReducers({
    tarea: tereaReducer,
});
const persisConfig = {
    key: "root",
    storage,
}
const  persistedReducer = persistReducer(persisConfig,rootReducer);

export const store = configureStore({
  //  reducer:{
    //    tarea:tereaReducer
    //}
    reducer:persistedReducer,
    middleware:(getDefaultMiddlewar) =>
        getDefaultMiddlewar({
            serializableCheck:false
        })

});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

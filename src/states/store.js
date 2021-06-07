import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./userReducer";

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),

    reducer: {
        user: userReducer,
    },
});

export default store;

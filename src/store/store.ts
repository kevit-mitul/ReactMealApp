import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from "./slices/categorySlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer : {
        "category" : categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

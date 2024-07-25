import { createSlice } from "@reduxjs/toolkit"
import {useSelector} from "react-redux";


const initialState = {
    mealList: [],
    loading : false,
    searchTerm: "",

}

const categorySlice = createSlice({
    name: "meals",
    initialState,
    reducers : {
        setMealsList (state, action) {
            state.mealList = action.payload
        },
        setLoading (state, action) {
            state.loading = action.payload
        }
    }

})

export const { setMealsList, setLoading } = categorySlice.actions;
export default categorySlice.reducer;

export const useMealsSlice = () => {
    return useSelector((state) => state.meals);
}

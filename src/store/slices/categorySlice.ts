import { createSlice } from "@reduxjs/toolkit"
import {useSelector} from "react-redux";


const initialState = {
    categoryList: [],
    selectedCategory: {},
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers : {
        setSelectedCategory (state, action) {
            state.selectedCategory = action.payload
        },
        setCategoryList (state, action) {
            state.categoryList = action.payload
        }
    }
})

export const { setSelectedCategory, setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;

export const useCategorySlice = () => {
    return useSelector((state) => state.category);
}

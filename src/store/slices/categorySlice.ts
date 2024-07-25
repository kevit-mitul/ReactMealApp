import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {useSelector} from "react-redux";
import APIManager from "../../api/APIManager";

type CategoryType = {
    categoryList: [],
    selectedCategory: {},
    loading: false,
}

const initialState = {
    categoryList: [],
    selectedCategory: {},
    loading: false,
    error : "",
}

export const getCategories = createAsyncThunk(
    'getCategories',
    async (_, thunkAPI) => {
        try {
            const response = await APIManager.getCategories()
            return response?.data?.categories
        }
        catch(error) {
            throw new Error("Failed to get category Data")
        }
    },
)


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers : {
        setSelectedCategory (state, action) {
            state.selectedCategory = action.payload
        },
    },
    extraReducers : builder => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categoryList = action.payload
            state.loading = false
        })
        .addCase(getCategories.pending, (state, action) => {
            state.loading = true
            state.error  = null
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.loading = false
            console.log("REJECTED===>",action)
            state.error = action.error.message || 'Something went wrong';
        })
    }
})

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;

export const useCategorySlice = () => useSelector((state) => state.category)

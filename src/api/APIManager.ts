import ENDPOINTS from "./Endpoints"
import apiClient from "./ApiClient";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

const APIManager = {

    getCategories: () => {
        return apiClient.get(ENDPOINTS.CATEGORIES);
    },

    getMeals : (category) => {
        return apiClient.get(ENDPOINTS.GETMEALSBYCATEGORY(category))
    }


}

export default APIManager

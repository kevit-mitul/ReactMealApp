import {useQuery} from "@tanstack/react-query";
import APIManager from "../APIManager";


const useMealDetails = (mealId) => useQuery({ queryKey: ['mealDetails'], queryFn: APIManager.getMealDetails.bind(mealId), select:(data)=> console.log("HOOKDATA==>",data.data) });
export default useMealDetails;

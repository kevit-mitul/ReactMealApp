import {useQuery} from "@tanstack/react-query";
import APIManager from "../APIManager";


const useCategory = () => useQuery({ queryKey: ['category'], queryFn: APIManager.getCategories });
export default useCategory;

const ENDPOINTS = {
  CATEGORIES: 'categories.php',
  GETMEALSBYCATEGORY: (category : string) =>`filter.php?c=${category}`,
  GETMEALDETAILS: (mealId : string) =>`lookup.php?i=${mealId}`,

};

export default ENDPOINTS;

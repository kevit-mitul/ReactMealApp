const ENDPOINTS = {
  CATEGORIES: 'categories.php',
  GETMEALSBYCATEGORY: (category : string) =>`filter.php?c=${category}`,
  GETMEALDETAILS: (mealId : string) =>`lookup.php?i=${mealId}`,
  SEARCHMEALS : (seatchText : string) =>`search.php?s=${seatchText}`,



};

export default ENDPOINTS;

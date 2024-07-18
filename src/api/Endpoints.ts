const ENDPOINTS = {
  CATEGORIES: 'categories.php',
  GETMEALSBYCATEGORY: (category : string) =>`filter.php?c=${category}`,
};

export default ENDPOINTS;

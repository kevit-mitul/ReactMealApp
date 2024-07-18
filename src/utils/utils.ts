

export const getIngredients = (data) => {

    const ingredients = [];

    for (let i = 0; i < 20; i++) {
        if(data["strIngredient" + (i+1)]){
            ingredients.push(data["strIngredient" + (i+1)])
        }
    }
    return ingredients

}

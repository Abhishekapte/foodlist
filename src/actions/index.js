// Action creator
export const selectFood = food => {
    // return an action
    return {
        type: 'FOOD_SELECTED',
        payload : food
   };
};
import { combineReducers } from 'redux';

const foodsReducer = () => {
    return [
        { title : 'Bhel Puri', price: '100'},
        { title : 'Dahi Puri', price: '80'},
        { title : 'Masala Puri', price: '100'},
        { title : 'Aloo Chat', price: '50'}
    ];
};

const selectedFoodReducer = (selectedFood = null, action) => {
    if (action.type === 'FOOD_SELECTED') {
        return action.payload;
    }

    return selectedFood;
};

export default combineReducers({
    foods : foodsReducer,
    selectedFood : selectedFoodReducer
});
import React from 'react';
import FoodList from './FoodList';
import Cart from './Cart';

const App = () => {
    return (
        <div className='ui container grid'>
          <div className='ui row'>
            <div className='column eight wide'>
              <FoodList />
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
    );
}

export default App;
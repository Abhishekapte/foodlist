import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ food }) => {
    if (!food) {
        return <div></div>;
    }
    return (
        <div style={{margin:'50px'}}>
            <h3>Items Details:</h3>
            <p>
                Items : {food.title} <br />
                Amount : {food.price}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { food : state.selectedFood}
}

export default connect(mapStateToProps)(Cart);
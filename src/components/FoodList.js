import React from 'react';
import { connect } from 'react-redux';
import { selectFood } from '../actions';

class FoodList extends React.Component {
    renderList() {
        return this.props.foods.map((food) => {
            return (
                <div className='item' key={food.title}>
                    <div className='right floated content'>
                      <button onClick={() => this.props.selectFood(food)} className='ui button primary'>
                      ADD
                     </button>
                    </div>
                    <div className='content'>{food.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div className='ui divided list' style={{marginTop:'50px'}}>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { foods : state.foods};

}

export default connect(mapStateToProps, { selectFood })(FoodList);
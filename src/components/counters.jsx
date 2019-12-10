import React, { Component } from 'react';
import Counter from "../components/counter.jsx";

class Counters extends Component {
    

    render() { 
        const {onReset, onDelete, onIncrement, onDecrement} = this.props;
        return ( 
            <div className="counters-wrap">
            
                <h2 style={ { fontSize: "22px" } }>Counter</h2>

                <button onClick={onReset} > Reset </button>

                { this.props.counters.map( counter => (
                     <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}  counter={counter} /> 
                ) ) }
                
            </div>
        );

    }
}
 
export default Counters;
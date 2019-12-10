import React, { Component } from 'react';

class Counter extends Component {

    render() { 

        return ( 

            <div className="counter-wrap">

                <label> { this.props.counter.value } </label>

                <button style={ { margin: "0 0 0 10px", padding: "2px 4px" } } onClick={ () => this.props.onIncrement(this.props.counter) } > + </button>

                <button style={ { margin: "0 10px", padding: "2px 4px" } } onClick={ () => this.props.onDecrement(this.props.counter) } > - </button>

                <button onClick={ () => this.props.onDelete(this.props.counter.id) }> Delete </button>

            </div>

        );

    }

}

export default Counter;
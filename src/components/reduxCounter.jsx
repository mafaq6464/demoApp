import React, { Component } from 'react';
import { connect } from "react-redux";
import "./reduxCounter.css";

class reduxCounter extends Component {
    render() { 
        return ( 
            <div className="redux-counter">
                <h3>Current Counter= <span style={{ display: 'inline-block', minWidth: '40px' }}>{this.props.ctr}</span></h3>
                <ul>
                    <li>
                        <button onClick={ this.props.onIncrementCounter  }>Increment</button>
                    </li>
                    <li>
                        <button onClick={ this.props.onDecrementCounter  }>Decrement</button>
                    </li>
                    <li>
                        <button onClick={ this.props.onAddCounter  }>Add 5</button>
                    </li>
                    <li>
                        <button onClick={ this.props.onSubtractCounter  }>Subtract 5</button>
                    </li>
                </ul>
            </div>
         );
    }
}

const mapStatsToProp = state => {
    return {
        ctr: state.counter 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: "INCREMENT"}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        onAddCounter: () => dispatch({type: "ADD", val: 5}),
        onSubtractCounter: () => dispatch({type: "SUBTRACT", val: 5})
    }
}


export default connect( mapStatsToProp, mapDispatchToProps )( reduxCounter );
import React, { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }

    }

    numCountPlus = () => {
        this.setState( (state) => ({ count : state.count + 1 }) );
    }

    numCountMinus = () => {
        this.setState( (state) => ({ count: state.count - 1 }));
    }

    render(){
        return(
            <div className="counter">

                <h1>Counter</h1>

                <p>Total Count is : {this.state.count > 0 ? "greater than zero !" : "lesser than zero !" } </p>

                <div className="counter-list">
                    <label style={{ marginRight: "5px" }}> { this.state.count } </label>
                    <button className="btn-inc" onClick={this.numCountPlus} style={{ marginRight: "5px" }}> INCREMENT </button>
                    <button className="btn-dec" onClick={this.numCountMinus} > DECREMENT </button>
                </div>
            </div>
        );
    }
}

export default Counter;
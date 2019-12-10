import React, { Component } from 'react';
import Counters from "./counters";

class CountersWrap extends Component {

    state = { 
        counters : [
            { id: 1, value: 5 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 0 }
        ]
    };
    
    handleReset = () => {
        const counters = this.state.counters.map( cn => {
            cn.value = 0;
            return cn;
        });
        this.setState({ counters });
    };
    
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState({ counters });
    };
    
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
      //  counters[index] = {...counter};
        counters[index].value++;
    
        this.setState({ counters });
    
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
       // counters[index] = {...counter};
        counters[index].value--;
    
        this.setState({ counters });
    
    };

    render() { 
        return ( 

            <React.Fragment>

                <h3 style={{ paddingTop: "40px" }}>Number of counters = {this.state.counters.length}</h3>

                <Counters 
                    counters={this.state.counters} 
                    onReset={this.handleReset}  
                    onDelete={this.handleDelete}  
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                />

            </React.Fragment>

         );
    }
}
 
export default CountersWrap;
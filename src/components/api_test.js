import React, { Component } from "react";

class ApiTest extends Component{

    state = {
        username: []
    }

    componentDidMount() {
        fetch("https://jsoneditoronline.org/?id=ca7c3ff914704d12a1228ee63c3124ec").then( data => {
            return data.json();
        }).then( name => {
            if ( name )
                this.setState({ username: name })
        })
    } 

    render(){
        return(
            <div className="api-test-section">
                <div className="ats-img" >
                   {this.state.username.map( (user, index) =>
                        <h6 key={index}>{user.array}</h6>
                    )}
                </div>
            </div>
        );
    }

}

export default ApiTest;

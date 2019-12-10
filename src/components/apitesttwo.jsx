import React, { Component } from 'react';

class ApiTestTwo extends Component{

    state = {
        userData: []
    };

    componentDidMount() {
        fetch("https://api.randomuser.me/?nat=US&results=5").then( dat => { 
            return dat.json(); 
        }).then( data => {
            if( data.results ){
                this.setState({ userData: data.results });
            }
        })
    }

    render() {
        const {userData}=this.state;
        return (
            <div style={{ margin: "20px auto", maxWidth: "275px" }}>
                <h3 style={{ marginBottom: "20px" }} >Hello Db</h3>
                <table style={{ tableLayout: "fixed", width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>First</th>
                            <th>Last</th>
                        </tr>
                        {userData.slice(0,3).map((user,index) =>  
                            <tr key={index}>
                                <td>{user.name.title}</td>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ApiTestTwo;
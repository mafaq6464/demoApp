import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApiTestTwo from "./apitesttwo";
import EmpLists from "./database.jsx";
import UserDate from "./user_data";

class Header extends Component{

    render(){
        return(
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent"  style={{ flexDirection: "column" }}>
                        <ul class="navbar-nav" style={{ marginBottom: "50px" }}>
                            <li class="nav-item active">
                                <Link to="/ApiTestTwo">Hello DB</Link>
                            </li>
                            <li class="nav-item"> 
                                <Link to="/EmpLists">Employee DB</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/UserDate">FORM</Link>
                            </li>
                        </ul>
                        <Route path="/ApiTestTwo" component={ApiTestTwo} />
                        <Route path="/EmpLists" component={EmpLists} />
                        <Route path="/UserDate" component={UserDate} />
                    </div>
                </nav>
            </Router>
        )
    }
}

export default Header;
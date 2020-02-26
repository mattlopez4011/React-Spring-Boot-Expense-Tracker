import React, { Component } from 'react';
import AppNav from "./AppNav";

class Expenses extends Component {
    state = { }
    render(){
        return(
            <div>
                <AppNav/>
                <h1>Expenses Page</h1>
            </div>
        );
    }
}

export default Expenses;
import React, { Component } from 'react';
import AppNav from "./AppNav";

class Home extends Component {
    state = { }
    render(){
        return(
            <div>
                <AppNav />
                <h1>Home page!</h1>
            </div>
        );
    }
}

export default Home;
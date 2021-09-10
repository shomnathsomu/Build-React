import React, { Component } from 'react'
import Home from './Home';
import Login from './Login';

class Signup extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        const {isLoggedIn} = this.state;

        let element = isLoggedIn ? <Home /> : <Login />
        return (
            <div className="card">
                {element}
            </div>
        )
    }
}

export default Signup;
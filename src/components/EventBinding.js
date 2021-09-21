import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        // for normal JS function, it needs to bind that function
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    

    render() {
        return (
            <div className="card">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default EventBinding;
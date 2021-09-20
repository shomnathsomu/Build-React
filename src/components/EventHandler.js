import React, { Component } from 'react'

class EventHandler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    

    handleOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
    }

    render() {
        return (
            <div className="card">
                <h1>Event Handler</h1>
                <input type="text" onChange={this.handleOnChange}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}

export default EventHandler;
import React, {Component} from "react";

class Company extends Component{
    render(){
        const {compName, compDesc} = this.props;
        return(
            <div className="card">
                <h3 className="empName"> {compName} </h3>
                <p className="empDes"> {compDesc} </p>
            </div>
        )
    }
}

export default Company;
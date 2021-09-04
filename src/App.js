import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './components/Card';

const tech = "ReactJS";
const title = "Welcome back to React JS!";

const titleStyle = {
  color: "yellowgreen", 
  backgroundColor: "Brown",
  textAlign: "Center",
};

function App(){
    return <div>
        <h1 className="headingStyle largeText"> {tech} </h1>
        <h3 style={titleStyle}> {title} </h3>
        <Card nameEmp = "Shomnath Somu"/>
        <Card nameEmp = "Ta-seen Junaid"/>
        <Card />
        <Card />
  </div>
}

export default App;
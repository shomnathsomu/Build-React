import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './components/Card';
import Data from './data.json';

const tech = "ReactJS";
const title = "Welcome back to React JS!";

const titleStyle = {
  color: "yellowgreen", 
  backgroundColor: "Brown",
  textAlign: "Center",
};

function App(){

  // console.log(Data);
  let items = [];
  // for(let i = 0; i < Data.length; i++){
  //   items.push(<Card nameEmp = {Data[i].empName} designationEmp = {Data[i].empDes} />);
  // }

  // DaTA Mapping
  items = Data.map((item, index) => <Card key={index} nameEmp = {item.empName} designationEmp = {item.empDes} /> ); 

    return <div>
        <h1 className="headingStyle largeText"> {tech} </h1>
        <h3 style={titleStyle}> {title} </h3>
        <Card nameEmp = "Shomnath Somu" designationEmp = "SOftware Engineer" />
        <Card nameEmp = "Ta-seen Junaid" designationEmp = "Senior SOftware Engineer" />
        {items}
        <Card />
        <Card />
  </div>
}

export default App;
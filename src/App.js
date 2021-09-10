import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './components/Card';
import Data from './data.json';
import Company from './components/Company';
import Counter from './components/Counter';
import Signup from './components/Signup';

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
        <Card nameEmp = "Shomnath Somu" designationEmp = "Software Engineer" />
        <Card nameEmp = "Ta-seen Junaid" designationEmp = "Senior Software Engineer" />
        {items}
        <Card />
        <Card />
        <Company compName="BJIT Limited" compDesc="Most popular software company in Bangladesh."/>
        <Company compName="LinkedIn" compDesc="Most popular professional company in the world!"/>
        <Company compName="NETFLIX" compDesc="Most popular movie watching site in USA."/>

        <Counter />

        <Signup />
  </div>
}

export default App;
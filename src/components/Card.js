const designationEmp = "Software Engineer";
const companyName = "BJIT Limited";
const contNo = "Contact: +8801767142501";
const joinDate = "Joining date";

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

function Card (props) {
  const {nameEmp} = props;
  return <div className="card">
          <h4 className="empName">{nameEmp}</h4>
          <p className="empDes"> {designationEmp} </p>
          <p className="compName"> {companyName} </p>
          <p className="contNo"> {contNo} </p>
          <p className="joinDate"> {joinDate} {currentDate + "-" + currentMonth + "-" + currentYear} </p>
        </div>
}

export default Card;
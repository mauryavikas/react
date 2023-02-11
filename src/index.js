import React from 'react';
import ReactDOM from 'react-dom/client';

function Employee(props) {
  return  <div style={{border:"3px solid black", width: "300px", padding:"3px", margin:"3px", float:"left" }}>
              <p>Employee ID : <b>{props.data.Id}</b></p>
              <p>Employee Name : <b>{props.data.Name}</b></p>
              <p>Employee Location : <b>{props.data.Location}</b></p>
              <p>Employee Salary : <b>{props.data.Salary}</b></p>
          </div>;
}

function DisplayEmployee (props) {
  const List= props.employeeList;
  const listElements = List.map((emp) =>
    <Employee key={emp.Id}  data={emp} />
  );

  return <div>
          {listElements}
         </div>
}

const employees = [
  {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
  {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},
  {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
];

const root = ReactDOM.createRoot(document.getElementById('root'));

const element=<DisplayEmployee employeeList={employees}></DisplayEmployee>

root.render(element);
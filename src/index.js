import React from 'react';
import ReactDOM from 'react-dom/client';



class Salary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance
    };
  }

  updateSalary=()=>{
    let salary= parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.sa.value);
    console.log("updatesalary"+salary);
    this.props.onSalarychange(salary);
    
  }
  render() {
    return <div>
      <h1> Salary details .... </h1>
      <p>
        <label>Basic Salary :<input type="text"  ref="basic" defaultValue={this.state.basic}></input></label>
      </p>
      <p>
        <label>HRA:<input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
      </p>
      <p>
        <label>Special allowance :<input type="text" ref="sa" defaultValue={this.state.sa}></input></label>
      </p>  
      <button onClick={this.updateSalary} >update</button>
      </div>
  }

}
class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      updatedsalary:null
    };
    
  }

  getUpdatedSalary=(salary)=>{
    console.log("getupdatedsalary"+salary);
    this.setState({updatedsalary: salary})
  }

  render(){
    return <div>
      <h1> Employee Component...</h1>
      <p>
        <label>ID:<b>{this.props.id}</b></label>
      </p>
      <p>
        <label>ID:<b>{this.props.name}</b></label>
      </p>
      <p>
        <label>location:<b>{this.props.location}</b></label>
      </p>
      <p>
        <label>total salary:<b>{this.props.salary}</b></label>
      </p>
      <p>
        <label>updated total salary:<b>{this.state.updatedsalary}</b></label>
      </p>
      < Salary BasicSalary={ this.props.BasicSalary}  HRA={this.props.HRA}
       SpecialAllowance={this.props.SpecialAllowance} onSalarychange={this.getUpdatedSalary}> </Salary>
    </div> 
  }

}const element =<Employee id="101" name="vikas" location="Banglore"
                salary="50000" BasicSalary="25000" HRA="10000"
                SpecialAllowance="15000"></Employee>


const element1 = <h1>Hello, world</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
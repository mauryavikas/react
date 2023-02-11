import React from 'react';
import ReactDOM from 'react-dom/client';

const EmployeeContext= React.createContext();
class App extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      data:{
        Id:101,
        Name:'Pragim Tech'
      }
    };  
  } 
  
  count =1;

  onchangedata =()=>{
    
    this.setState({data:{Id:(101+this.count)}});
    this.count=this.count+1;
  } 
  render() {
    return <div>
      <h2>Welcome to App Component</h2> 
      <p><label> Employee Id : {this.state.data.Id}</label></p>
      <EmployeeContext.Provider value={this.state.data}>
      <Employee />
      </EmployeeContext.Provider>
      <button onClick={this.onchangedata}>update</button>   
        </div>
  }
}

class Employee extends React.Component {  
  
  static contextType = EmployeeContext;
  
  render() {
    return <div>
      <h2>Welcome to Employee Component...</h2>
      <p><label>Employee Id : <b>{this.context.Id}</b></label></p> 
      <Salary></Salary>     
      </div>
  }
}

class Salary extends React.Component {
  static contextType = EmployeeContext;
  render() {
    return <div>
      <h2>Welcome to Salary Component...</h2>
      <p><label>Employee Id : <b>{this.context.Id}</b></label></p> 
      </div>
  }
}


const element1 = <h1>Hello, world</h1>
const element= <App></App>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
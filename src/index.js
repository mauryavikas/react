import React from 'react';
import ReactDOM from 'react-dom/client';

class EmployeeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: {
                Id: '',
                Name: '',
                Location: '',
                Salary: ''
            }
        };
    }

    changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            employee:{
              ...this.state.employee,
              [name]: value
            }
          });
    }

    onCreateEmployee = (event) => {

        event.preventDefault();
        console.log(this.state.employee);
        alert(JSON.stringify(this.state.employee));
    }

    render() {

        return (
            <form>
                <p>
                    <label>Employee ID : <input type="text" name="Id" value={this.state.employee.Id}
                        onChange={this.changeHandler} ></input>
                    </label>
                </p>
                <p>
                    <label>Employee Name : <input type="text" name="Name"
                        value={this.state.employee.Name}
                        onChange={this.changeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>Employee Location : <input type="text" name="Location"
                        value={this.state.employee.Location}
                        onChange={this.changeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>Employee Salary : <input type="text" name="Salary"
                        value={this.state.employee.Salary}
                        onChange={this.changeHandler}></input>
                    </label>
                </p>

                <button onClick={this.onCreateEmployee}>Create</button>
            </form>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <EmployeeComponent></EmployeeComponent>

root.render(element);
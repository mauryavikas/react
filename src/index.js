import React from 'react';
import ReactDOM from 'react-dom/client';

class EmployeeComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
    
            fetch("https://localhost:7081/api/Employee")
            .then(res => res.json())
            .then((result) => { this.setState({ employees: result});
             console.log(result);});
    }

    render() {

        return <div style={{ border: "3px solid black", width: "250px", padding: "3px", margin: "3px", float: "left" }}>
            <h2>Employee Details</h2>
            <table style={{textAlign:"left"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map((emp,i) => (
                        <tr key = {i}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.location}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    }


}

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <EmployeeComponent></EmployeeComponent>

root.render(element);
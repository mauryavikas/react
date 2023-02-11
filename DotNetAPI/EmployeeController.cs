using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebAppDotNet.Employee_Model;

namespace WebAppDotNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        [EnableCors("MyPolicy")]
        [HttpGet(Name = "Employee")]
        public List<Employee> getEmployee()
        {
            List<Employee> EmpList= new List<Employee>
            {
                new Employee{Id=101,Name="Abhinav",Location="Bangalore",Salary=12345},

                new Employee{Id=102,Name="Abhishek",Location="Chennai",Salary=23456},

                new Employee{Id=103,Name="Akshay",Location="Bangalore",Salary=34567},

                new Employee{Id=104,Name="Akash",Location="Chennai",Salary=45678},

                new Employee{Id=105,Name="Anil",Location="Bangalore",Salary=56789}
            };
            return EmpList;
  
        }
    }
}

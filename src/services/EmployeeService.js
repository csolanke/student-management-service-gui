import axios from 'axios'


const EMPLOYEE_API_BASE_URL ="http://192.168.1.111:7171/api/v1/employees";
class EmployeeService{

getEmployees()
{
    return axios.get(EMPLOYEE_API_BASE_URL);
}

createEmployees(employee) 
{
    return axios.post(EMPLOYEE_API_BASE_URL,employee);
    
}

getEmployeeById(employeeId)
{
    return axios.get(EMPLOYEE_API_BASE_URL + '/'+ employeeId);
}

updateEmployees(employee, employeeId)
{
    return axios.put(EMPLOYEE_API_BASE_URL +'/'+ employeeId,employee);
}

}
export default new EmployeeService();
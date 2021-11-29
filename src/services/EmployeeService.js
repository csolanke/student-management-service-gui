import axios from 'axios'


const EMPLOYEE_API_BASE_URL ="http://192.168.1.111:9595/api/v1/employees";
class EmployeeService{

getEmployees()
{
    return axios.get(EMPLOYEE_API_BASE_URL);
}

}
export default new EmployeeService();
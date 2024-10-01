// eslint-disable-next-line no-unused-vars
import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const department in employeesList) {
    if (department in employeesList) {
      allEmployees[department] = [...employeesList[department]];
    }
  }

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}

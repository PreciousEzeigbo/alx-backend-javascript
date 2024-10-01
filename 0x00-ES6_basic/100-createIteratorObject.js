export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[departmentIndex];
      const employees = report.allEmployees[department];

      if (employeeIndex >= employees.length) {
        departmentIndex += 1;
        employeeIndex = 0;
        return this.next();
      }

      const employee = employees[employeeIndex];
      employeeIndex += 1;

      return { value: employee, done: false };
    },
  };
}

export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department in report.allEmployees) {
      // Use Object.prototype.hasOwnProperty to check for the property
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        for (const employee of report.allEmployees[department]) {
          yield employee; // Yield each employee
        }
      }
    }
  }
  return employeeIterator(); // Return the generator
}

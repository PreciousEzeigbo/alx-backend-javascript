export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  // Use the iterator to gather employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  // Join the names with ' | ' and return the resulting string
  return employeeNames.join(' | ');
}

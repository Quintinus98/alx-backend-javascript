export default function createIteratorObject(report) {
  const employeeNames = Object.values(report.allEmployees);
  const employees = [];
  for (const employee of employeeNames) {
    employees.push(...employee);
  }
  return employees;
}

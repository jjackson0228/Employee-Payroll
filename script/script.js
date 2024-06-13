// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // I added the code and saved the employee first and last name and salary into the array and pushed it so it would print 
  const employeesArray = []

  while (true) { //made changes to the while loop adding let and if to the statements and adding ===null to break if not complete 
    let employeeFirstName = window.prompt('Enter employee first name');
    if (employeeFirstName === null) break;

    let employeeLastName = window.prompt('Enter employee last name');
    if (employeeLastName === null) break; //made changes seperating my code to make it where if you dont put in a name or anything it will break the line code 

    let employeeSalaryInput = window.prompt('Enter employee salary');
    if (employeeSalaryInput === null) break;

    let employeeSalary = parseFloat(employeeSalaryInput); //changed to make this a numeric value only if not then alert to put in a numeric value only 
    if (isNaN(employeeSalary)) {
      alert("Please enter a valid number for the salary.");
      continue;
    }

    let employeeInfo = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: employeeSalary,
    };

    employeesArray.push(employeeInfo);

    let addAnother = window.prompt('Do you want to add another employee? (yes/no)');
    if (addAnother === null || addAnother.toLowerCase() !== 'yes') {
      break;
    }
  }
  return employeesArray;
};




// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

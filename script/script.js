// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // I added the code and saved the employee first and last name and salary into the array and pushed it so it would print 
  const employeesArray = []

  while (true) {
    let employeeFirstName = window.prompt('Enter employee first name');
    if (employeeFirstName === null) break;

    let employeeLastName = window.prompt('Enter employee last name');
    if (employeeLastName === null) break;

    let employeeSalaryInput = window.prompt('Enter employee salary');
    if (employeeSalaryInput === null) break;

    let employeeSalary = parseFloat(employeeSalaryInput);
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
  if (employeesArray.length === 0) { //set value for console to print nothing to calculate if no employees are ther e
    console.log("No employees to calculate average salary.");
    return;
  }

  let totalSalary = 0; //set default value to 0 for a baseline

  for (let i = 0; i < employeesArray.length; i++) { //I added this loop to start with i set to "0" then i will look at employee array in increments on 1 until there isnt any more in the array
    totalSalary += employeesArray[i].salary;
  }

  let averageSalary = totalSalary / employeesArray.length;
  console.log(`The average salary is ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
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

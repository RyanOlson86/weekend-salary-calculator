console.log("jafnds");

// Function to take in info after submit button and push to table
// Look into childNodes
// let formInputs = document.getElementById("formInputs");
// console.log("formInputs Obj:", formInputs);
let monthlySalary = 0;

function submitInfo(event) {
  console.log("submit button works");
  // Target tableBody
  let tableBody = document.getElementById("tableBody");

  let firstName = document.getElementById("firstNameInput").value;
  let lastName = document.getElementById("lastNameInput").value;
  let idInput = document.getElementById("idInput").value;
  let titleInput = document.getElementById("titleInput").value;
  let annualSalaryInput = document.getElementById("annualSalaryInput").value;

  monthlySalary += annualSalaryInput / 12;

  // code to add new table elements
  let row = tableBody.insertRow(0);
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  // let cell5 = row.insertCell(5);

  cell0.innerHTML = firstName;
  cell1.innerHTML = lastName;
  cell2.innerHTML = idInput;
  cell3.innerHTML = titleInput;
  cell4.innerHTML = annualSalaryInput;
  // cell5.innerHTML =firstName;

  // Add monthlySalary to footer
  document.getElementById('salary-footer').innerHTML = `<p>Total Monthly: ${monthlySalary}</p>`

  // Use this to stop submit button from refreshing page
  event.preventDefault();
}

console.log("jafnds");

// Function to take in info after submit button and push to table
// Look into childNodes
let formInputs = document.getElementById('formInputs');
console.log("formInputs Obj:", formInputs);

function submitInfo(event) {
  console.log("submit button works");

  // Target tableBody
  let tableBody = document.getElementById("tableBody");

  // !this works

  let firstName = document.getElementById('firstNameInput').value;
  let lastName = document.getElementById('lastNameInput').value;
  console.log('first name from form', firstName);
  console.log('last name from form', lastName);

  // push 'string' to html. Should be able to concatenate using different inputs. Maybe use a loop?
//   tableBody.innerHTML += `
//     <tr>
//       <td>First Name</td>
//       <td>Last Name</td>
//       <td>ID</td>
//       <td>Title</td>
//       <td>Annual Salary</td>
//       <td></td>
//     </tr>`;

  // Use this to stop submit button from refreshing page
  event.preventDefault();
}

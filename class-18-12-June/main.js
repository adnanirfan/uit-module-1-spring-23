/* 
    render Array from localStorage in onload event
*/

const userArr = [];
function getUserData(params) {
  params.preventDefault();
  const userObj = {};
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    userObj[element.id] = element.value;
  }
  userArr.push(userObj);
  console.log(userObj);
  renderRow(userObj);

  //   save userArr in localStorage
}
const button = document.getElementById("submit");
button.addEventListener("click", getUserData);
function renderRow(userObj) {
  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr");
  for (let key in userObj) {
    console.log(key);
    const td = document.createElement("td");
    td.textContent = userObj[key];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

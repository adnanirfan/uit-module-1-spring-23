/**
    1. read array from localStorage  — localStorage.getItem
    2. parse array 
    3. arr.push(obj)
    4. showOnConsole 
    5. stringify array 
    6. save in localStorage
 *  */

function saveInLocalStorage() {
  let userArray = localStorage.getItem("userArray");
  if (!userArray) {
    userArray = [];
  } else {
    userArray = JSON.parse(userArray);
  }

  const name = document.getElementById("studentName").value;
  const module = document.getElementById("module").value;

  const obj = {
    name: name,
    module: module,
  };

  userArray.push(obj);

  const stringifiedObj = JSON.stringify(userArray);
  localStorage.setItem("userArray", stringifiedObj);
}

function clearLocalStorage() {
  localStorage.clear();
}

function showOnUI() {
  const userArray = localStorage.getItem("userArray");

  console.log(userArray);
}

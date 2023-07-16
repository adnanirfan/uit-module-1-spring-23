/* 
  Todo Array
  Add Function
*/
function add() {
  const inputElement = document.getElementById("input");
  const value = inputElement.value;
  console.log(value);

  const li = document.createElement("li");
  const list = document.getElementById("list");
  const removeBtn = document.createElement("button");
  
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
  li.textContent = value;
  li.appendChild(removeBtn);

  inputElement.value = "";
  list.appendChild(li);
}

// localStorage.setItem("name", "Adnan");

// localStorage.getItem("name");

// localStorage.removeItem("name");

// localStorage.clear();

// JSON.stringify(); // -> JS variable to String

// JSON.parse() // -> String to Array/Object

function saveInLocalStorage() {
  const name = "UIT";
  const course = "Web & Mobile";
  const lab = "CL-3";

  //   localStorage.setItem("name", name);
  //   localStorage.setItem("course", course);
  //   localStorage.setItem("lab", lab);

  const obj = {
    name: name,
    course: course,
    lab: lab,
  };

  const stringifiedObj = JSON.stringify(obj);
  localStorage.setItem("user", stringifiedObj);
}

function clearLocalStorage() {
  localStorage.clear();
}

function showOnUI() {
  const name = localStorage.getItem("name");
  const course = localStorage.getItem("course");
  const lab = localStorage.getItem("lab");

  console.log(name, course, lab);
}

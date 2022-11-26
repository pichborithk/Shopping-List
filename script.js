let button = document.getElementById("enter");
let input = document.getElementById("user-input");
let ul = document.querySelector("ul");
let list = document.querySelectorAll(".todo");
let deleteList = document.getElementsByClassName("delete-list");
// var li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function removeList(a) {
  for (let i = 0; i < deleteList.length; i++)
    a.addEventListener("click", function () {
      a.parentNode.remove();
    });
}

function addDeleteButton() {
  for (let i = 0; i < list.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add("delete-list");
    btn.innerHTML = "Delete";
    list[i].appendChild(btn);
    removeList(btn);
  }
}

addDeleteButton();

function createListElement() {
  let btn = document.createElement("button");
  btn.classList.add("delete-list");
  btn.appendChild(document.createTextNode("Delete")); // btn.innerHTML = "Delete"
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
  removeList(btn);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function addClassAfterClick(task) {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
}

// function removeListAfterClick(del) {
//   if (del.target.className === "delete-list");
//   {
//     del.target.parentElement.remove();
//   }
// }

// button.addEventListener("click", addListAfterClick);
button.onclick = addListAfterClick;

input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("click", addClassAfterClick);
ul.onclick = addClassAfterClick;

// ul.onclick = removeListAfterClick;

var list = document.getElementsByClassName("To-Do_List")[0];
var input = document.getElementById("user");
var trashbin = document.getElementById("trash");

console.log(list);
console.log(input);
console.log(trashbin);

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

function addItem() {
  var maindiv = document.createElement("div");
  var div1 = document.createElement("div");
  var check = document.createElement("i");
  var trash = document.createElement("i");

  maindiv.className = "item";
  maindiv.innerHTML = "<div>" + input.value + "<div>";

  check.className = "fa-regular fa-check-to-slot";
  check.style.color = "lightgrey";
  check.addEventListener("click", function () {
    check.style.color = "limegreen";
  });
  div1.appendChild(check);

  trash.className = "fa-regular fa-trash-can";
  trash.style.color = "darkgrey";
  trash.addEventListener("click", function () {
    maindiv.remove();
  });
  div1.appendChild(trash);

  maindiv.appendChild(div1);

  list.appendChild(maindiv);

  input.value = "";
}

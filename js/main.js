const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");

input_box.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-task-button").click();
  }
});

function addTask() {
  if (input_box.value === "") {
    alert("You must enter a task in text box");
  } else {
    let li = document.createElement("li");
    list_container.appendChild(li);
    let div_container = document.createElement("div");
    div_container.className = "list-container-items";
    li.appendChild(div_container);

    let image_div = document.createElement("div");
    image_div.className = "list-image";
    image_div.id = "list-image";
    image_div.innerHTML =
      '<img src="images/icons8-unchecked-radio-button-50.png" />';
    div_container.appendChild(image_div);

    let list_item = document.createElement("div");
    list_item.className = "list-item";
    list_item.id = "list-item";
    list_item.innerHTML = input_box.value;
    div_container.appendChild(list_item);

    let list_close = document.createElement("div");
    list_close.className = "list-close";
    list_close.id = "list-close";
    list_close.innerHTML = "&#10006;";
    div_container.appendChild(list_close);
  }
  input_box.value = "";
}

list_container.addEventListener(
  "click",
  function (e) {
    if (e.target.id === "list-close") {
      e.target.parentElement.remove();
    } else if (e.target.id === "list-item") {
      if (e.target.style.textDecoration === "none") {
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "grey";
        let image_id = e.target.parentElement.querySelector("#list-image");
        image_id.innerHTML = '<img src="images/icons8-checked-48.png" />';
      } else {
        e.target.style.textDecoration = "none";
        e.target.style.color = "black";
        let image_id = e.target.parentElement.querySelector("#list-image");

        image_id.innerHTML =
          '<img src="images/icons8-unchecked-radio-button-50.png" />';
      }
    }
  },
  false
);

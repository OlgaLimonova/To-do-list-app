// Er JS lösning
let taskInput = document.getElementById("task");
let addButton = document.getElementById("add");
let uncompletedList = document.getElementById("unCompletedList");
let completedList = document.getElementById("completedList");

addButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText) {
    let listItem = document.createElement("li");
    let input = document.createElement("input");
    input.type = "text";
    input.value = taskText;
    input.disabled = true;
    input.className = "input-field";

    let editButton = document.createElement("button");
    editButton.textContent = "Ändra";
    editButton.className = "edit-button";

    let finishedButton = document.createElement("button");
    finishedButton.textContent = "Färdig";
    finishedButton.className = "finished-button";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Radera";
    deleteButton.className = "delete-button";

    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(finishedButton);
    listItem.appendChild(deleteButton);

    uncompletedList.appendChild(listItem);

    editButton.addEventListener("click", function () {
      if (input.disabled) {
        input.disabled = false;
        editButton.textContent = "Spara";
        input.focus();
      } else {
        input.disabled = true;
        editButton.textContent = "Ändra";
      }
    });

    finishedButton.addEventListener("click", function () {
      completedList.appendChild(listItem);
      listItem.removeChild(finishedButton);
    });


    deleteButton.addEventListener("click", function () {
      listItem.remove ();
    });
  }
});
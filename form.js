
document.getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newTodo = document.getElementById("new-todo").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const location = document.getElementById("location").value.trim();

    if (newTodo && dueDate && priority && location) {
      addToDoItem(newTodo, dueDate, priority, location);
      document.getElementById("new-todo").value = "";
      document.getElementById("due-date").value = "";
      document.getElementById("priority").value = "";
      document.getElementById("location").value = "";
    }
  });

function addToDoItem(todoText, dueDate, priority, location) {
  const todoList = document.getElementById("todo-list");
  const listItem = document.createElement("li");
  listItem.className = "flex flex-col bg-gray-200 rounded p-2 my-2";
  listItem.innerHTML = `
        <div class="flex justify-between items-center">
            <span>${todoText}</span>
            <div>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onclick="completeItem(this)">Complete</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onclick="removeItem(this)">Remove</button>
            </div>
        </div>
        <div class="text-sm text-gray-600">
            <p>Due: ${dueDate}</p>
            <p>Priority: ${priority}</p>
            <p>Location: ${location}</p>
        </div>
    `;
  todoList.appendChild(listItem);
}

function completeItem(button) {
  const listItem = button.parentElement.parentElement.parentElement;
  const completedList = document.getElementById("completed-list");
  button.remove();
  completedList.appendChild(listItem);
}

function removeItem(button) {
  const listItem = button.parentElement.parentElement.parentElement;
  listItem.remove();
}

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("todo-form");

//   form.addEventListener("submit", (event) => {
//     // Get all the input fields
//     const newTodo = document.getElementById("new-todo").value.trim();
//     const dueDate = document.getElementById("due-date").value.trim();
//     const location = document.getElementById("location").value.trim();
//     const priority = document.getElementById("priority").value.trim();

//     // Check if any field is empty
//     if (!newTodo || !dueDate || !location || !priority) {
//       // Prevent form submission
//       event.preventDefault();

//       // Alert user to fill all fields
//       alert("Please fill out all fields.");
//     }
//   });
// });


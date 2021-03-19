var buttonEI = document.querySelector("#save-task"); 
var tasksToDoEI = document.querySelector("#tasks-to-do");
var createTaskHandler = function()
{
    var listItemEI = document.createElement("li");
    listItemEI.className = "task-item";
    listItemEI.textContent = "This is a new task";
    tasksToDoEI.appendChild(listItemEI);
}

// name of button element is buttonEI, camelCase marks the element as JavaScript
// EI identify it as a DOM element
buttonEI.addEventListener("click",createTaskHandler); 

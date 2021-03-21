var formEI = document.querySelector("#task-form"); 
var tasksToDoEI = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event)
{   event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create list item
    var listItemEl = document.createElement("li");
    // give it a class name
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEI.appendChild(listItemEl);
 
    
};

// name of button element is buttonEI, camelCase marks the element as JavaScript
// EI identify it as a DOM element
formEI.addEventListener("submit",createTaskHandler); 

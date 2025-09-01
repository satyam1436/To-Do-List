document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function(){
        if(taskInput.value.trim() === ""){
            alert("Please enter a task");
            return;
        }

        addTask(taskInput.value);
        taskInput.value = "";
    })

    function addTask(taskText){
        const li = document.createElement("li")

        li.innerHTML = 
        `<span> ${taskText} </span>
        <div> 
            <button class="edit-btn"> Edit </button>
            <button class="delete-btn"> Delete </button>
        </div>
        `
        taskList.appendChild(li);

        li.querySelector(".edit-btn").addEventListener("click", function(){
            const newText = prompt("Edit your task: ", taskText);

            if(newText){
                li.querySelector("span").innerHTML = newText;
            }
        })

        li.querySelector(".delete-btn").addEventListener("click", function(){
            li.remove();
        })
    }
})

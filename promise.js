let add = document.querySelector(".add");
let can = document.getElementById("cantainer");

add.addEventListener("click", () => {
    let num = document.querySelector(".tonumb").value;
    let to = document.querySelector("#todo").value;

    
    localStorage.setItem(num, to);


    let get = localStorage.getItem(num);

    
    can.insertAdjacentHTML("beforeend",
        `<div class="todo-item">
            <p class="para">${get}</p> 
            <button class="delte button-group">Delete</button>
            <button class="edit button-group">Edit</button>
        </div>`);


    let todoItems = can.querySelectorAll(".todo-item");
    let lastTodoItem = todoItems[todoItems.length - 1];

    let del = lastTodoItem.querySelector(".delte");
    let ed = lastTodoItem.querySelector(".edit");


    del.addEventListener("click", () => {
        localStorage.removeItem(num);
        lastTodoItem.remove();
    });

    
    ed.addEventListener("click", () => {
        let a = confirm("Are you sure you want to edit? Enter the new text in the todo box and then press the edit button.");
        if (a === true) {
            let to = document.querySelector("#todo").value;
            localStorage.setItem(num, to);
            let c = localStorage.getItem(num);
            lastTodoItem.querySelector(".para").innerHTML = c;
        } else {
            alert("If you want to edit, enter the new text in the todo box and then press the edit button.");
        }
    });
});

function myfunc() {
    if(document.querySelector('.collection').childElementCount !== 0) {
        alert('Successfully run');
    }
}


const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {

    document.addEventListener('DOMContentLoaded' , getTasks);
    clearBtn.addEventListener('click' , dltAll);
    form.addEventListener('submit' , addItem);
    taskList.addEventListener('click' , deleteItem);
    filter.addEventListener('keyup' ,filters);
}


//add perticular item
function addItem(e) {
    if(taskInput.value === ''){
        alert('Add Task');

    } else {

        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';

    }

    e.preventDefault();
}

//get tasks
function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);

        taskList.appendChild(li);
    });
}

//local stg function
function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//delete perticular item
function deleteItem (e) {
    if(e.target.parentElement.classList.contains('delete-item')){ 
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    // taskList.querySelector('.collection-item').remove();

    // e.preventDefault();

}

//remove from LC
function removeTaskFromLocalStorage(taskItem){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task ,index){
        if(taskItem.textContent === task){
            tasks.splice(index ,1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//delete all items
function dltAll() {
    //taskList.innerHTML = '';

    // while(taskList.firstChild){
    //     taskList.firstChild.remove();
    // }


    //this is the fastest process
    // while(taskList.firstChild){
    //     taskList.removeChild('taskList.firstChild');
    // }


    const sel = document.querySelector('.collection').childElementCount;
    localStorage.clear();


    for(let i = 0 ; i < sel ; i++) {
        document.querySelector('.collection').children[0].remove();
    }
}

function filters(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){

        //we can use task.firstChild.textContent also
        const item = task.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.dispaly = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
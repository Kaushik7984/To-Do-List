const form = document.querySelector('form');
const taskList = document.querySelector('#task-list'); // Corrected selector

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" />  <span>${task}</span> <button id="dltbtn">Delete</button>`;
    taskList.appendChild(listItem);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#task-input');
    const task = input.value;
    addTask(task);
    input.value = '';
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem); 
    }
});
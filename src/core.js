import { counters } from "./task";
import { core } from "./layout";

const rightCounters = (() => {
  let rightTask = 0;
  let taskArr = [];
  let selected = 0;
  return {rightTask, taskArr, selected};
})();

const textPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl')

  const name = document.createElement('input');
  name.type = type;
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};

const textAreaPiece = (id, text, type) => {
  const title = document.createElement('label');
  title.setAttribute('for', id);
  title.textContent = text;
  title.classList.add('text-xl');

  const name = document.createElement(type);
  name.name = id;
  name.setAttribute('id', id);
  name.classList.add('m-5', 'border', 'pl-1');

  return {title, name};
};

const taskButton = (name, num) => {
  const task = document.createElement('button');
  const text = name;
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-5/6', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton');
  task.textContent = text;
  const counter = num;

  return {task, counter, text};
};

const priority = () => {

  const priority = document.createElement('div');
  const priDrop = document.createElement('select');
  const pri = document.createElement('option');
  pri.textContent = 'Priority';
  pri.selected = true;
  pri.disabled = true;
  pri.hidden = true;
  const low = document.createElement('option');
  low.textContent = 'Low';
  const med = document.createElement('option');
  med.textContent = 'Medium';
  const high = document.createElement('option');
  high.textContent = 'High';
  priDrop.add(pri);
  priDrop.add(low);
  priDrop.add(med);
  priDrop.add(high);
  
  priority.appendChild(priDrop);
  return {priority}
}

const taskForm = (() => {
  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5', 'hidden');
  const title = textPiece('name', 'Task Name', 'text');
  const des = textAreaPiece('des', 'Description', 'textarea');
  const date = priority();

  const submit = taskButton('Add Task', -1);

  submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.name.value === '') {
      alert('Task must have a name');
    }
    if (des.name.value === '') {
      alert('Please enter a description');
    }
  });
  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(des.title);
  form.appendChild(des.name);
  form.appendChild(date.priority);

  form.appendChild(submit.task);
  return {form, submit};
})();

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {
  
};

const taskButtonDeleter = (() => {

})();

function taskFormCheck() {

}

const newTaskButton = (() => {
  const newTask = document.createElement('button');
  newTask.textContent = 'New Task +';
  newTask.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-40', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton');
  newTask.addEventListener('click', () => {
    taskForm.form.classList.remove('hidden');
  });

  const taskTitle = document.createElement('h3');
  taskTitle.classList.add('text-xl', 'my-5');
  taskTitle.textContent = 'Task Title';
  return {newTask, taskTitle};
})();

const buttonSelect = (() => {
  function buttonCheck() {
    for (let i = 0; i < counters.taskArr.length; i++) {
      counters.taskArr[i].task.addEventListener('click', () => {
        if (rightCounters.selected > 0) {
            document.getElementById('main').classList.remove('bg-slate-400', 'hover:bg-slate-400');
            document.getElementById('main').removeAttribute('id');
            rightCounters.selected = 0;
            console.log('function run');
        }
        core.top.classList.remove('hidden');
        counters.taskArr[i].task.setAttribute('id', 'main');
        document.getElementById('main').classList.add('bg-slate-400', 'hover:bg-slate-400');
        rightCounters.selected++;
        console.log(rightCounters.selected);
        newTaskButton.taskTitle.textContent = counters.taskArr[i].text;
      });
    }
  }



  return {buttonCheck};
})();




export {rightCounters, buttonSelect, newTaskButton, taskForm};
import '/dist/output.css';
import { side } from './layout';

// Creates a task button on the left side bar
const taskButton = (name) => {
  const task = document.createElement('button');
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-5/6', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'px-2');
  task.textContent = name;

  return {task};
};

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
// TODO Create Create button

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {

};

const taskForm = (() => {
  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5');

  const title = textPiece('name', 'Task Name', 'text');
  const des = textAreaPiece('des', 'Description', 'textarea');
  const date = priority();

  const submit = taskButton('Add Task');
  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(des.title);
  form.appendChild(des.name);
  form.appendChild(date.priority);

  form.appendChild(submit.task);
  return {form, submit};
})();

// Create form that sends info to the "item" factory
const form = (() => {

  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5');

  const title = textPiece('name', 'New Task', 'text');

  const submit = taskButton('Add Task');
  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(submit.task);
  return {form, submit, title};
})();

// receives info from "form"
// creates and adds task to right column
// clears textbox
const taskButtonMaker = (() => {
  let taskArr = [];
  form.submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    const addTask = taskButton(form.title.name.value);
    taskArr.push(addTask);
    side.tasks.appendChild(addTask.task);
    console.log(taskArr);
    form.title.name.value = '';
  });
})();

export {form, taskForm};
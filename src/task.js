import '/dist/output.css';
import { side } from './layout';
import { buttonSelect, rightCounters } from './core';

const counters = (() => {
  let leftTask = 0;
  let taskArr = [];
  return {leftTask, taskArr};
})();

const clear = (() => {
  function wipe() {
    localStorage.clear();
  }

  return {wipe};
})();

// Creates a task button on the left side bar
const taskButton = (name, num) => {
  const task = document.createElement('button');
  const text = name;
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-18', 'w-5/6', 'rounded-lg', 'flex-none', 'shadow-md', 'text-ellipsis', 'overflow-hidden', 'p-2', 'taskButton');
  task.textContent = text;
  const counter = num;

  return {task, counter, text};
};

const leftTaskLocal = (toStore) => {
  const stored = localStorage.setItem('title', toStore);
  const retrieve = localStorage.getItem('title');
  return {stored, retrieve};
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


// Create form that sends info to the "item" factory
const form = (() => {

  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5', 'hidden');

  const title = textPiece('name', 'New Task', 'text');
  const submit = taskButton('Add Task', -1);
  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(submit.task);
  return {form, submit, title};
})();

const leftLocalStorageCheck = (() => {
  if (localStorage.getItem('title')) {
    const toLoad = localStorage.getItem('title');
    const converted = JSON.parse(toLoad);
    // console.log(converted);
    for (let i = 0; i < converted.length; i++) {
      const addTask = taskButton(converted[i].text, converted[i].counter);
      counters.taskArr.push(addTask);
      counters.leftTask++;
    }
    // console.log(counters.taskArr);
    // append over in layout.js

    return {converted};
  }
})();

// receives info from "form"
// creates and adds task to right column
// clears textbox
const taskButtonMaker = (() => {
  form.submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.title.name.value === '') {
      alert('Task must have a name');
    } else {
      const addTask = taskButton(form.title.name.value, counters.leftTask);
      counters.taskArr.push(addTask);
      buttonSelect.buttonCheck();

      console.log(counters.taskArr);
      const storage = leftTaskLocal(JSON.stringify(counters.taskArr));
      side.tasks.appendChild(counters.taskArr[counters.leftTask].task);
      counters.leftTask++;
      rightCounters.taskArr.push([]);
      console.log(rightCounters.taskArr);
      // console.log(counters.taskArr);
      // console.log(storage.retrieve);
  
      //split into separate function later
      form.title.name.value = '';
      form.form.classList.add('hidden');
      return {storage};
    }
  

  });

})();

const plus = (() => {
  const plus = taskButton('+', -1);
  plus.task.addEventListener('click', (e) => {
    form.form.classList.remove('hidden');
  });
  return {plus};
})();

export {form, plus, clear, counters};
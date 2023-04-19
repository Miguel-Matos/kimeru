import { counters } from "./task";
import { core } from "./layout";

const rightCounters = (() => {
  let rightTask = 0;
  let taskArr = [];
  let selected = 0;
  return {rightTask, taskArr, selected};
})();

const rightTaskLocal = (toStore) => {
  const stored = localStorage.setItem('tasks', toStore);
  const retrieve = localStorage.getItem('tasks');
  return {stored, retrieve};
};

// const rightLocalStorageCheck = (() => {
//   if (localStorage.getItem('tasks')) {
//     const toLoad = localStorage.getItem('tasks');
//     const converted = JSON.parse(toLoad);
//     // console.log(converted);
//     for (let i = 0; i < converted.length; i++) {
//       const addTask = taskButton(converted[i].text, converted[i].counter);
//       counters.taskArr.push(addTask);
//       counters.leftTask++;
//     }
//     // console.log(counters.taskArr);
//     // append over in layout.js

//     return {converted};
//   }
// })();

const leftTaskGenerator = (() => {
  for (let i = 0; i < counters.taskArr.length; i++) {
    rightCounters.taskArr.push([]);
    
  }
  console.log(rightCounters.taskArr);
  console.log(counters.taskArr);
  
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
  priority.classList.add('pb-5');
  priDrop.name = 'priority';
  const pri = document.createElement('option');
  pri.textContent = 'Priority';
  pri.selected = true;
  pri.disabled = true;
  pri.hidden = true;
  const low = document.createElement('option');
  low.textContent = 'Low';
  low.value = 'Low';
  const med = document.createElement('option');
  med.textContent = 'Medium';
  med.value = 'Medium';
  const high = document.createElement('option');
  high.textContent = 'High';
  high.value = 'High';
  priDrop.add(pri);
  priDrop.add(low);
  priDrop.add(med);
  priDrop.add(high);
  
  priority.appendChild(priDrop);
  return {priority, priDrop}
}

const taskForm = (() => {
  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5', 'absolute', 'top-10', 'left-auto', 'hidden');
  const title = textPiece('name', 'Task Name', 'text');
  const des = textAreaPiece('des', 'Description', 'textarea');
  const level = priority();

  const submit = taskButton('Add Task', -1);

  form.appendChild(title.title);
  form.appendChild(title.name);
  form.appendChild(des.title);
  form.appendChild(des.name);
  form.appendChild(level.priority);

  form.appendChild(submit.task);
  return {form, submit, title, des, level};
})();

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {
  
const name = document.createElement('p');
name.textContent = title;
const des = document.createElement('p');
des.textContent = description;
const date = document.createElement('p');
date.textContent = dueDate;
const pri = document.createElement('p');
pri.textContent = priority;

const newTask = document.createElement('div');
newTask.classList.add('flex', 'gap-5', 'flex-wrap');
const check = document.createElement('input');
check.type = 'checkbox';
newTask.appendChild(check);
newTask.appendChild(name);
newTask.appendChild(des);
newTask.appendChild(date);
newTask.appendChild(pri);
return {newTask};
};


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
            // console.log('function run');
        }
        core.top.classList.remove('hidden');
        counters.taskArr[i].task.setAttribute('id', 'main');
        document.getElementById('main').classList.add('bg-slate-400', 'hover:bg-slate-400');
        rightCounters.selected++;
        rightCounters.rightTask = counters.taskArr[i].counter;
        console.log(rightCounters.rightTask);
        newTaskButton.taskTitle.textContent = counters.taskArr[i].text;
      });
    }
  }



  return {buttonCheck};
})();

const taskAdder = (() => {
  const taskSpace = document.createElement('div');
  
  taskForm.submit.task.addEventListener('click', (e) => {
    e.preventDefault();
    let value = taskForm.level.priDrop.value;
    console.log(`Priority is ${value}`);
    if (taskForm.title.name.value === '' || taskForm.des.name.value === '' || value === 'Priority') {
      alert('Please fill in all the information');
    } else {
      const newItem = item(taskForm.title.name.value, taskForm.des.name.value, 'Deadline', value);
      rightCounters.taskArr[rightCounters.rightTask].push(newItem);
      console.log(rightCounters.taskArr);
      let position = 0;

      for (let i = 0; i < rightCounters.taskArr[rightCounters.rightTask].length; i++) {
        position = i;
      }

      taskSpace.appendChild(rightCounters.taskArr[rightCounters.rightTask][position].newTask);



      // CONTINUE HERE!!!
      const itemStorage = rightTaskLocal(rightCounters.taskArr);
      console.log(`In storage we have ${itemStorage.retrieve}`);
  
      taskForm.title.name.value = '';
      taskForm.des.name.value = '';
      taskForm.level.priDrop.value = 'Priority'
      taskForm.form.classList.add('hidden');
    }
  });



  return {taskSpace};
})();

const taskButtonDeleter = (() => {

})();

export {rightCounters, buttonSelect, newTaskButton, taskForm, taskAdder};
import '/dist/output.css';
import '/src/input.css';
import { plus, clear, counters, form  } from './task';
import { buttonSelect, newTaskButton, taskForm, taskAdder } from './core';


const top = (() => {
  const topBar = document.createElement('div');
  topBar.classList.add('bg-slate-200', 'drop-shadow-md', 'p-5', 'fixed', 'w-screen', 'top-0', 'z-10', 'flex', 'place-content-between');
  const taskDisplayButton = document.createElement('button');
  taskDisplayButton.textContent = '<';
  taskDisplayButton.classList.add('font-sans', 'text-3xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-18', 'w-14', 'rounded-lg', 'shadow-md', 'p-2', 'pb-3');
  let closed = false;
  taskDisplayButton.addEventListener('click', () => {
    if (closed === false) {
      taskDisplayButton.textContent = '>'
      closed = true;
      side.sideBar.classList.add('hidden');
    } else {
      taskDisplayButton.textContent = '<'
      side.sideBar.classList.remove('hidden');
      closed = false;
    }
  });

  const title = document.createElement('h1');
  title.classList.add('text-5xl');
  title.textContent = "Kimeru";
  title.addEventListener('click', () => {
    clear.wipe();
    console.log('Local Storage Wiped');
  });
  topBar.appendChild(taskDisplayButton);
  topBar.appendChild(title);
  return {topBar};
})();



// Makes the side bar
const side = (() => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('bg-slate-300', 'w-1/3', 'max-w-sm', 'h-screen', 'drop-shadow-md');
  const title = document.createElement('h2');
  title.textContent = 'Tasks';
  title.classList.add('text-center', 'font-sans', 'text-3xl', 'py-5');
  
  const tasks = document.createElement('div');
  tasks.setAttribute('id', 'taskButtons');
  tasks.classList.add('flex', 'flex-col', 'items-center', 'h-3/4', 'overflow-y-auto', 'pb-5', 'gap-5', 'scrollbar-hide');
  plus.plus.task.classList.remove('p-2', 'h-14', 'w-5/6');
  plus.plus.task.classList.add('px-2', 'h-8', 'pb-1');

  console.log(counters.taskArr);
  for ( let i = 0; i < counters.taskArr.length; i++) {
    tasks.appendChild(counters.taskArr[i].task);
  }
  const titlePlusDiv = document.createElement('div');
  titlePlusDiv.classList.add('flex', 'gap-5', 'justify-center', 'items-center', 'pt-5');
  titlePlusDiv.appendChild(title);
  titlePlusDiv.appendChild(plus.plus.task);

  sideBar.appendChild(titlePlusDiv);
  sideBar.appendChild(tasks);  
  return {sideBar, tasks, title};
})();

// TODO make factory to generate Task buttons


// Right area of the UI
const core = (() => {
  const area = document.createElement('div');
  // const taskSpace = document.createElement('div');
  const top = document.createElement('div');
  top.classList.add('flex', 'flex-col', 'items-center', 'self-center', 'hidden');

  top.appendChild(newTaskButton.taskTitle);
  top.appendChild(newTaskButton.newTask);

  area.appendChild(top);
  area.classList.add('h-3/4', 'w-screen', 'overflow-y-auto', 'p-5', 'flex', 'flex-col', 'items-center');
  area.appendChild(form.form);
  area.appendChild(taskForm.form);
  area.appendChild(taskAdder.taskSpace);
  buttonSelect.buttonCheck();

  return {area, top};
})();


// Combined left nav and right area
const area = (() => {
  const main = document.createElement('main');
  main.classList.add('flex', 'fixed', 'top-20');
  main.appendChild(side.sideBar);
  main.appendChild(core.area);

  return {main};

})();

export {top, core, area, side};
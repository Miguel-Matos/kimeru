import '/dist/output.css';
import '/src/input.css';
import { plus, leftLocalStorageCheck, counters } from './task';
import { tester } from './nav';
import { form, taskForm } from './task';

const top = (() => {
  const topBar = document.createElement('div');
  topBar.classList.add('bg-slate-200', 'drop-shadow-md', 'p-5', 'fixed', 'w-screen', 'top-0', 'z-10');
  const title = document.createElement('h1');
  title.classList.add('text-5xl', 'text-right');
  title.textContent = "Kimeru";
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
  tasks.classList.add('flex', 'flex-col', 'items-center', 'h-screen', 'overflow-y-auto', 'pb-5', 'gap-5', 'scrollbar-hide');
  plus.plus.task.classList.remove('p-2', 'h-14', 'w-5/6');
  plus.plus.task.classList.add('px-2', 'h-8', 'pb-1');

  console.log(counters.taskArr);
  for ( let i = 0; i < counters.taskArr.length; i++) {
    tasks.appendChild(counters.taskArr[i].task);
  }
  const titlePlusDiv = document.createElement('div');
  titlePlusDiv.classList.add('flex', 'gap-5', 'justify-center', 'items-center');
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
  area.classList.add('h-screen', 'w-screen', 'overflow-y-auto', 'mt-5', 'px-5');
  area.appendChild(form.form);
  area.appendChild(taskForm.form);
  return {area}
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
import '/dist/output.css';

const top = (() => {
  const topBar = document.createElement('div');
  topBar.classList.add('bg-slate-200', 'drop-shadow-md', 'p-5', 'static');
  const title = document.createElement('h1');
  title.classList.add('font-sans', 'text-4xl', 'text-right');
  title.textContent = "Kimeru";
  topBar.appendChild(title);
  return {topBar};
})();

const taskButton = (name) => {
  const task = document.createElement('button');
  task.classList.add('font-sans', 'text-2xl', 'bg-slate-100', 'hover:bg-slate-200', 'h-20', 'w-5/6', 'rounded-lg');
  task.textContent = name;

  return {task};
}

const side = (() => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('bg-slate-300', 'w-1/4', 'max-w-md', 'h-screen', 'drop-shadow-md', 'static', 'flex', 'flex-col', 'items-center');
  const title = document.createElement('h2');
  title.textContent = 'Tasks';
  title.classList.add('text-center', 'font-sans', 'text-3xl', 'py-5');

  const testTask = taskButton('Test 1');

  sideBar.appendChild(title);
  sideBar.appendChild(testTask.task);


  return {sideBar};
})();

export {top, side};

import '/dist/output.css';

// Creates a task button on the left side bar
const taskButton = (name) => {
  const task = document.createElement('button');
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'active:bg-slate-400' , 'h-14', 'w-5/6', 'rounded-lg', 'flex-none');
  task.textContent = name;

  return {task};
};

// TODO Create Create button

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {

};

// Create form that sends info to the "item" factory
const form = (() => {

  const form = document.createElement('form');
  form.classList.add('bg-slate-200', 'flex', 'flex-col', 'w-64', 'sm:w-80', 'items-center', 'p-5');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = "Task Name";
  nameLabel.classList.add('text-xl')
  const name = document.createElement('input');
  name.type = 'text';
  name.name = 'name';
  name.setAttribute('id', 'name');
  name.classList.add('m-5', 'border', 'pl-1');
  const submit = taskButton('Add Task');
  form.appendChild(nameLabel);
  form.appendChild(name);
  form.appendChild(submit.task);
  return {form};
})();

export {form};
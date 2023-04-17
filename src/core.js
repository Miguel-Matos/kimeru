import { counters, taskForm } from "./task";
import { core } from "./layout";

const rightCounters = (() => {
  let rightTask = 0;
  let taskArr = [];
  let selected = 0;
  return {rightTask, taskArr, selected};
})();

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {
  
};

const taskButtonDeleter = (() => {

})();

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




export {rightCounters, buttonSelect, newTaskButton};
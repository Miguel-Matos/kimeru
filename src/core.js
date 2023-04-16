import { counters } from "./task";

const rightCounters = (() => {
  let rightTask = 0;
  let taskArr = [];
  return {rightTask, taskArr};
})();

// Creates task item for the right area of the UI
const item = (title, description, dueDate, priority) => {
  
};

const taskButtonDeleter = (() => {

})();

const buttonSelect = (() => {
  function buttonCheck() {
    for (let i = 0; i < counters.taskArr.length; i++) {
      counters.taskArr[i].task.addEventListener('click', () => {
        console.log(counters.taskArr[i].counter);
      });
    }
  }

  return {buttonCheck};
})();


export {rightCounters, buttonSelect};
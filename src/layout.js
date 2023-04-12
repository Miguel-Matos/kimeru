import '/dist/output.css';

const top = (() => {
  const topBar = document.createElement('div');
  topBar.classList.add('bg-slate-200', 'drop-shadow-md', 'p-5', 'sticky', 'top-0', 'z-10');
  const title = document.createElement('h1');
  title.classList.add('font-sans', 'text-5xl', 'text-right');
  title.textContent = "Kimeru";
  topBar.appendChild(title);
  return {topBar};
})();

const taskButton = (name) => {
  const task = document.createElement('button');
  task.classList.add('font-sans', 'text-xl', 'bg-slate-100', 'hover:bg-slate-200', 'h-14', 'w-5/6', 'rounded-lg');
  task.textContent = name;

  return {task};
}

const side = (() => {
  const sideBar = document.createElement('div');
  sideBar.classList.add('bg-slate-300', 'w-1/3', 'max-w-sm', 'h-screen', 'drop-shadow-md');
  const title = document.createElement('h2');
  title.textContent = 'Tasks';
  title.classList.add('text-center', 'font-sans', 'text-3xl', 'py-5');

  const tasks = document.createElement('div');
  tasks.classList.add('flex', 'flex-col', 'items-center', 'overflow-y-auto');

  const testTask = taskButton('Test 1');

  sideBar.appendChild(title);
  sideBar.appendChild(tasks);
  tasks.appendChild(testTask.task);

  return {sideBar};
})();

const core = (() => {
  const area = document.createElement('div');
  area.classList.add('flex-1', 'h-screen', 'overflow-y-auto');
  const test = document.createElement('p');
  test.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus lorem orci, id blandit massa porttitor id. Praesent velit sapien, tincidunt ut odio id, tincidunt fermentum mauris. Quisque ut euismod libero. Sed suscipit ex lorem, eu imperdiet erat mollis in. Proin ut purus sed velit sollicitudin iaculis a in justo. In condimentum lacus ut enim sodales, eget auctor nibh fermentum. Curabitur viverra eget ligula et tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut laoreet orci ut est hendrerit, consequat tincidunt elit euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ac augue luctus, vehicula sem nec, laoreet dui. Donec sed nisi maximus, venenatis dui ac, mattis urna. Nulla vitae venenatis magna. Aliquam vestibulum diam quis mattis posuere. Duis mi sapien, mollis vitae tortor a, auctor molestie mauris. Fusce sagittis lacus velit, in pulvinar nisl porttitor ut. Vivamus non metus at justo consectetur ullamcorper laoreet eu massa. Sed vel semper ligula. Morbi sed nisi ac velit ultrices dapibus. Nunc quis massa non nunc commodo molestie in ac urna. In et porttitor neque. Nullam eu justo rutrum, luctus velit molestie, fermentum nisl. Suspendisse tempus neque vel libero suscipit lacinia. Aenean eu justo sagittis, faucibus sapien eget, euismod erat. In hac habitasse platea dictumst. Donec efficitur fermentum velit, nec vulputate tortor. Sed elementum felis in tempor convallis. Pellentesque tortor tortor, euismod varius lobortis ut, sodales ac mi. Nam luctus magna sit amet aliquet porttitor. Praesent risus felis, dignissim tristique urna ac, molestie imperdiet leo. In hac habitasse platea dictumst. Sed ut eros euismod, egestas lorem nec, laoreet purus. Nullam porttitor pulvinar tortor. Nulla faucibus consequat ipsum a iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra vitae tellus eget accumsan. Nullam et ligula gravida, sagittis tellus eget, posuere est. Vestibulum pretium turpis ante, in ullamcorper dolor vestibulum ut.";
  area.appendChild(test);

  return {area}
})();

const area = (() => {
  const main = document.createElement('main');
  main.classList.add('flex', 'gap-5', 'fixed', 'top-20');
  main.appendChild(side.sideBar);
  main.appendChild(core.area);

  return {main};

})();

export {top, side, core, area};

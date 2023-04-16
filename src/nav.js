import { core } from "./layout";

const tester = (() => {
  const test = document.createElement('p');
  test.textContent = "Test";

  return {test};
})();

export {tester};
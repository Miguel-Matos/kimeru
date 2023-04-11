import '/dist/output.css';

const test = document.createElement('p');
test.textContent = 'Test';
test.classList.add('text-red-500');
document.body.appendChild(test);
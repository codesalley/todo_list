/* eslint-disable guard-for-in */
/* eslint-disable no-return-assign */

import { storage } from '../middleware/storage';
// eslint-disable-next-line import/no-cycle
import { clickHandler, delteTodo } from './untils';

// eslint-disable-next-line consistent-return
export default function renderTodos() {
  const projectUl = document.querySelector('.list-view');
  const todoList = document.createDocumentFragment();
  const db = storage('todo');
  if (db.length < 1) {
    return (projectUl.innerText = 'No todo yet.');
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const t in db) {
    const main = document.createElement('div');
    const h2 = document.createElement('h2');
    const dis = document.createElement('p');
    const time = document.createElement('p');
    const btn = document.createElement('button');
    btn.classList.add('remove-btn');
    btn.innerText = 'Remove';
    h2.innerText = db[t].title;
    dis.innerText = db[t].description;
    time.innerText = db[t].dueDate;
    main.appendChild(h2);
    main.appendChild(dis);
    main.appendChild(time);
    main.appendChild(btn);
    main.dataset.id = t;
    main.classList.add('todo-item');
    main.classList.add(db[t].priority);
    todoList.appendChild(main);
  }

  projectUl.innerHTML = '';
  projectUl.appendChild(todoList);
  clickHandler();
  delteTodo();
}

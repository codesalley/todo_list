/* eslint-disable guard-for-in */
import _ from 'lodash';
import { storage } from '../middleware/storage';

export default function groupTodo(groupName) {
  const db = storage('todo');
  const groupArray = _.filter(db, { project: groupName });
  const projectUl = document.querySelector('.list-view');
  const todoList = document.createDocumentFragment();


  if (groupArray.length < 1) {
    // eslint-disable-next-line no-return-assign
    return (projectUl.innerText = 'No todo yet.');
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const t in groupArray) {
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
    todoList.appendChild(main);
  }

  projectUl.innerHTML = '';
  return projectUl.appendChild(todoList);
}
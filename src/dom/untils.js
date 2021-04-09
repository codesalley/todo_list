/* eslint-disable import/no-cycle */
// all click events
import format from 'date-fns/format';
import { storage } from '../middleware/storage';
import renderTodos from './renderTodos';
import renderProjects from './renderProjects';
import groupTodo from './projectTodo';


function shoeListView() {
  const list = document.querySelector('.list-view');
  const productForm = document.querySelector('.project-form');
  const todoForm = document.querySelector('.todo-form');
  // eslint-disable-next-line no-unused-expressions
  list.classList.contains('hide-form') ? list.classList.remove('hide-form') : false;
  productForm.classList.add('hide-form');
  todoForm.classList.add('hide-form');
}

function clickHandler() {
  const btn = document.querySelectorAll('.project-item');
  btn.forEach((e) => e.addEventListener('click', () => {
    shoeListView();
    if (e.classList.contains('all-project')) {
      renderProjects();
    } else if (e.classList.contains('all-todos')) {
      renderTodos();
    }
  }));
}

function projetsClick() {
  const project = document.querySelectorAll('.project-lists');
  project.forEach((p) => {
    p.addEventListener('click', () => {
      groupTodo(p.dataset.title);
    });
  });
}

function delteTodo() {
  const db = storage('todo');
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((t) => {
    t.lastChild.addEventListener('click', () => {
      db.splice([t.dataset.id], 1);
      localStorage.setItem('todo', JSON.stringify(db));
      window.location.reload();
    });
  });
}

(() => {
  const time = document.querySelector('.today');
  const currentTime = document.createElement('p');
  const today = document.createElement('p');
  today.classList.add('currentDay');
  currentTime.classList.add('currentTime');
  today.innerText = format(new Date(), 'LLL d ');
  currentTime.innerText = format(new Date(), 'H ss ');
  time.appendChild(currentTime);
  time.appendChild(today);
})();


export {
  clickHandler, projetsClick, delteTodo, shoeListView,
};

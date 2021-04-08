// all click events
import { storage, updateStorage } from "../middleware/storage";
import renderTodos from "./renderTodos";
import renderProjects from "./renderProjects";
import groupTodo from "./projectTodo";
import _ from "lodash";
import format from "date-fns/format";
function clickHandler() {
  const btn = document.querySelectorAll(".project-item");
  btn.forEach((e) =>
    e.addEventListener("click", () => {
      if (e.classList.contains("all-project")) {
        shoeListView();
        renderProjects();
      } else if (e.classList.contains("all-todos")) {
        shoeListView();
        renderTodos();
      }
    })
  );
}

function projetsClick() {
  const project = document.querySelectorAll(".project-lists");
  project.forEach((p) => {
    p.addEventListener("click", () => {
      groupTodo(p.dataset.title);
    });
  });
}

function delteTodo() {
  const db = storage("todo");
  const todoItems = document.querySelectorAll(".todo-item");
  todoItems.forEach((t) => {
    t.lastChild.addEventListener("click", () => {
      db.splice([t.dataset.id], 1);
      localStorage.setItem("todo", JSON.stringify(db));
      window.location.reload();
    });
  });
}

(() => {
  const time = document.querySelector(".today");
  const currentTime = document.createElement("p");
  const today = document.createElement("p");
  today.classList.add("currentDay");
  currentTime.classList.add("currentTime");
  today.innerText = format(new Date(), "LLL d ");
  currentTime.innerText = format(new Date(), "H ss ");
  time.appendChild(currentTime);
  time.appendChild(today);
})();

function shoeListView() {
  const list = document.querySelector('.list-view');
  const productForm = document.querySelector('.project-form');
  const todoForm = document.querySelector('.todo-form');
  list.classList.contains('hide-form') ? list.classList.remove('hide-form') : false;
  productForm.classList.add('hide-form');
  todoForm.classList.add('hide-form');

}

export { clickHandler, projetsClick, delteTodo, shoeListView };

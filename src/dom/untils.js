// all click events
import { storage, updateStorage } from "../middleware/storage";
import renderTodos from "./renderTodos";
import renderProjects from "./renderProjects";
import groupTodo from "./projectTodo";
import _ from "lodash";
function clickHandler() {
  const btn = document.querySelectorAll(".project-item");
  btn.forEach((e) =>
    e.addEventListener("click", () => {
      if (e.classList.contains("all-project")) {
        renderProjects();
      } else if (e.classList.contains("all-todos")) {
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

export { clickHandler, projetsClick, delteTodo };

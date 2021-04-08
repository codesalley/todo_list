// all click events
import { storage, updateStorage } from "../middleware/storage";
import renderTodos from "./renderTodos";
import renderProjects from "./renderProjects";
import groupTodo from "./projectTodo";
import _ from "lodash";
function clickHandler() {
  const btn = document.querySelectorAll(".project-item");
  console.log(btn);
  btn.forEach((e) =>
    e.addEventListener("click", () => {
      if (e.classList.contains("all-project")) {
        console.log("projects");
        renderProjects();
      } else if (e.classList.contains("all-todos")) {
        console.log("todo");
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

export { clickHandler, projetsClick };

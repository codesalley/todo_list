// middleware integration

import newProject from "../middleware/project";
import { storage, updateStorage } from "../middleware/storage";
export default function createProject() {
  const form = document.querySelector(".project-form");
  
  const addProject = document.getElementById("addProject");
  const todoForm = document.querySelector('.todo-form');
  const projectForm = document.querySelector('.project-form');
  const mainContent = document.querySelector(".list-view");

  // form input   /
  const projectTitle = document.querySelector("#project");

  // create project function
  const createNewProject = (title) => {
    if (title !== "") {
      return true;
    } else {
      return false;
    }
  };

  addProject.addEventListener("click", () => {
    !todoForm.classList.contains('hide-form') ?  todoForm.classList.add('hide-form') : false;
    if (projectForm.classList.contains('hide-form')) {
      mainContent.classList.add('hide-form');
      projectForm.classList.remove('hide-form');
      projectForm.classList.add('show-form');
    } else {
      projectForm.classList.remove('show-form');
      projectForm.classList.add('hide-form');
      mainContent.classList.remove('hide-form');
      mainContent.classList.add('show-form');
    }
  });
  form.addEventListener("submit", (e) => {
    if (createNewProject(projectTitle.value)) {
      newProject(projectTitle.value);
    } else {
      e.preventDefault();
    }
  });
}

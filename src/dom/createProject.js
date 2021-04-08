// middleware integration
import newProject from "../middleware/project";
import { storage, updateStorage } from "../middleware/storage";
export default function createProject() {
  const form = document.querySelector(".project-form");
  const another = document.querySelector(".todo-form");
  const addProject = document.getElementById("addProject");
  const addTodoForm = document.querySelector(".main-body-form");
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
    form.classList.toggle("project-form-show");
    if (form.classList.contains("project-form-show")) {
      another.classList.remove("main-body-form-show");
      addTodoForm.classList.remove("main-body-form-show");
      addTodoForm.classList.add("main-body-form");
    } else {
      mainContent.classList.remove("main-body-hide");
      mainContent.classList.add("list-view");
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

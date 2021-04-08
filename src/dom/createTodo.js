import { updateStorage, storage } from "../middleware/storage";
import createTodo from "../middleware/todo";
import { format, compareAsc } from "date-fns";

export default function createNewTodo() {
  const addButton = document.getElementById("addTodo");
  const addTodoForm = document.querySelector(".main-body-form");
  const form = document.querySelector(".form-group");
  const mainContent = document.querySelector(".list-view");
  const projectForm = document.querySelector(".project-form");

  // form element
  const todoTitle = document.querySelector("#title");
  const todoDescription = document.querySelector("#description");
  const todoDueDate = document.querySelector("#dueDate");
  const todoPrioty = document.querySelector("#prioty");
  const todoProject = document.querySelector("#cat-project");

  // main prioties

  const checkInput = (titile, date) => {
    if (titile !== "" && date !== "") {
      return true;
    } else {
      return false;
    }
  };

  addButton.addEventListener("click", () => {
    if (mainContent.classList.contains("main-body-hide")) {
      mainContent.classList.remove("main-body-hide");
      mainContent.classList.add("list-view");
      addTodoForm.classList.remove("main-body-form-show");
      addTodoForm.classList.add("main-body-form");
    } else {
      projectForm.classList.remove("project-form-show");
      mainContent.classList.add("main-body-hide");
      mainContent.classList.remove("list-view");
      addTodoForm.classList.add("main-body-form-show");
      addTodoForm.classList.remove("main-body-form");
    }
  });

  form.addEventListener("submit", (e) => {
    if (checkInput(todoTitle.value, todoDueDate.value)) {
      const date = format(new Date(todoDueDate.value), "do EEEE y h:maaa");

      createTodo(
        todoTitle.value,
        todoDescription.value,
        date,
        todoProject.value,
        todoPrioty.value
      );
    } else {
      e.preventDefault();
    }

    // if(checkInput(todoTitle.nodeValue, todoDueDate.value)) {
    //   createTodo(todoTitle.value, todoDescription.value, );
    // }
  });
}

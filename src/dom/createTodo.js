import { updateStorage, storage } from "../middleware/storage";
import createTodo from "../middleware/todo";
import { format, compareAsc } from "date-fns";

export default function createNewTodo() {
  const addButton = document.getElementById("addTodo");
  const form = document.querySelector(".form-group");
  const mainContent = document.querySelector(".list-view");
  const todoForm = document.querySelector(".todo-form");
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
    !projectForm.classList.contains('hide-form') ?  projectForm.classList.add('hide-form') : false;
    if (todoForm.classList.contains("hide-form")) {
      mainContent.classList.add('hide-form');
      todoForm.classList.remove('hide-form');
      todoForm.classList.add('show-form');

    } else {
      mainContent.classList.remove('hide-form');
      todoForm.classList.remove('show-form');
      todoForm.classList.add('hide-form');

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
  });
}

import { updateStorage , storage } from "../middleware/storage";
import todo from '../middleware/todo';

export default function createNewTodo() {
    const addButton = document.getElementById("addTodo");
    const addTodoForm = document.querySelector(".main-body-form");
    const form = document.querySelector('form');
    const mainContent = document.querySelector(".list-view");
    const projectForm  =  document.querySelector('.project-form');
    
    addButton.addEventListener("click", () => {
      if(mainContent.classList.contains('main-body-hide')){
          mainContent.classList.remove('main-body-hide');
          mainContent.classList.add('list-view');
          addTodoForm.classList.remove('main-body-form-show');
          addTodoForm.classList.add('main-body-form');
        } else {
        projectForm.classList.remove('project-form-show');
          mainContent.classList.add('main-body-hide');
          mainContent.classList.remove('list-view');
          addTodoForm.classList.add('main-body-form-show');
          addTodoForm.classList.remove('main-body-form');
      }
    });

  
  }
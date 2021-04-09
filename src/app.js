import createProject from './dom/createProject';
import createNewTodo from './dom/createTodo';
import renderTodos from './dom/renderTodos';
import { storage } from './middleware/storage';
import { clickHandler, projetsClick } from './dom/untils';

storage('todo');
storage('project');
clickHandler();
renderTodos();
projetsClick();

createProject();
createNewTodo();

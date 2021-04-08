import createProject from './dom/createProject';
import createNewTodo from './dom/createTodo';
import renderTodos from './dom/renderTodos';
import {clickHandler, projetsClick} from './dom/untils';
import renderProjects from './dom/renderProjects'
import groupTodo from './dom/projectTodo';

renderProjects();
// groupTodo('Meetings');
// renderTodos();
clickHandler()
projetsClick();

createProject();
createNewTodo();


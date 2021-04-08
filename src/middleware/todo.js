import Todo from "../model/todo";
import {updateStorage, storage} from './storage';

export default function createTodo(title, description, dueDate, project, prioty) {
  const todo = new Todo();

  (todo.title = title),
    (todo.description = description),
    (todo.dueDate = dueDate),
    (todo.priority = prioty),
    (todo.project = project);
    updateStorage('todo', todo);
  return true;
}

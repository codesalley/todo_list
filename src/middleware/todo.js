import Todo from "../model/todo";

export default function createTodo(title, description, dueDate, project) {
  const todo = new Todo();

  (todo.title = title),
    (todo.description = description),
    (todo.dueDate = dueDate),
    (todo.project = project);
  return todo;
}

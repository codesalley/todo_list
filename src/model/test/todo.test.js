import Todo from '../../model/todo';

describe('Todo class constructor ', () => {
  test('constructor to accept 5 arguments, keys including[title, decribetion, dueDate, priority, project]', () => {
    const newTodo = new Todo(
      'title',
      'description',
      'dueDate',
      'priority',
      'project',
    );
    expect(newTodo).toEqual(expect.objectContaining({ title: 'title' }));
  });

  test('fail when initializing with an undefine key', () => {
    const newTodo = new Todo(
      'title',
      'discription',
      'dueDate',
      'priority',
      'project',
    );
    expect(newTodo).toEqual(expect.not.objectContaining({ some: 'some' }));
  });
});

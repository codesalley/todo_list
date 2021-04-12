import createTodo from '../todo';

beforeAll(() => {
  localStorage.setItem('todo', JSON.stringify([]));
});

describe('Create to do and append to local storage', () => {
  test('new todo saved to browser', () => {
    const newTestTodo = createTodo(
      'title',
      'description',
      'dueDate',
      'priority',
      'project',
    );
    expect(newTestTodo).toBeTruthy();
  });
});

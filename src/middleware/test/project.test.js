import newProject from '../project';

beforeAll(() => {
  localStorage.setItem('project', JSON.stringify([]));
});

describe('creating a new project with project modal', () => {
  test('create new project passing in project title', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(newProject('salley')).toBeTruthy();
  });
});

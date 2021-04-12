import Project from '../project';

describe('Project model test', () => {
  it('Project class accept one argument [String]', () => {
    const newProject = new Project('welcome');
    expect(newProject.title).toBe('welcome');
  });

  it('When created without pass arguments, title should be undefine', () => {
    const newProject = new Project();
    expect(newProject.title).toBeUndefined();
  });
});

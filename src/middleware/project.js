import Project from '../model/project';
import { storage, updateStorage } from './storage';

export default function newProject(title) {
  const project = new Project();
  project.title = title;
  updateStorage('project', project);
  return true;
}

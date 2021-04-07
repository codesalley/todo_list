import Project from "../model/project";

export default function createProject(title ) {
    const project = new Project;
    project.title = title;

    return project
}
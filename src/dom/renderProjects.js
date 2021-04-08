import { storage, updateStorage } from "../middleware/storage";
import newProject from "../middleware/project";
import _ from "lodash";
export default function renderProjects() {
    const projectUl = document.querySelector('.projects');
  const liFragments = document.createDocumentFragment();

  const defaultProjects = ["Workout", "Study", "Work", "Meetings"];
  const projectStorage = storage("project");
  if (projectStorage.length < 3) {
    defaultProjects.forEach((e) => {
      newProject(e);
    });
  }
  const sortedProjects = _.sortBy(projectStorage, ["title"], ["asc", "desc"]);
  for (const ele in sortedProjects) {
    const li = document.createElement("li");
    li.classList.add("project-item");
    const html = '<i class="fa urgent fa-circle-o" aria-hidden="true"></i>';
    li.innerHTML = html;
    const p = document.createElement('p');
    p.innerText = sortedProjects[ele].title;
    li.appendChild(p);
   liFragments.appendChild(li);    
  }

  projectUl.appendChild(liFragments);
  console.log(projectUl);
  return projectUl;
}

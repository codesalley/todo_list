import { storage, updateStorage } from "../middleware/storage";
import newProject from "../middleware/project";
import _ from "lodash";
export default function renderProjects() {
  const projectUl = document.querySelector(".list-view");
  const mainFragments = document.createDocumentFragment();

  const defaultProjects = ["Workout", "Study", "Work", "Meetings"];
  const projectStorage = storage("project");
  if (projectStorage.length < 3) {
    defaultProjects.forEach((e) => {
      newProject(e);
    });
  }
  const sortedProjects = _.sortBy(projectStorage, ["title"], ["asc", "desc"]);

  for (const ele in sortedProjects) {
    const card = document.createElement("div");
    const title = document.createElement("h4");

    title.innerText = sortedProjects[ele].title;
    card.appendChild(title);
    card.dataset.id = ele;
    card.classList.add('project-lists');
    card.dataset.title = sortedProjects[ele].title;
    mainFragments.appendChild(card);
  }
  projectUl.innerHTML = '';
   projectUl.appendChild(mainFragments);
}

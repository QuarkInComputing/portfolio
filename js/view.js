import { projectData } from "../data/projectData.js";

const projectTitle = document.getElementById('view-title');

function viewProject(project) {

    console.log(project);
    console.log(projectData);

    projectData.forEach(element => {
        if(element.id = project) {
            projectTitle.innerHTML = element.title;
        }
    });
};

window.viewProject = viewProject;
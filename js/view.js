import { projectData } from "../data/projectData.js";

const projectTitle = document.getElementById('view-title');
const projectImage = document.getElementById('view-image');
const projectDesc = document.getElementById('view-desc');

console.log(projectData);

function viewProject(project) {

    console.log(project);
    console.log(projectData);

    var foundProject = false;
    projectData.forEach(element => {
        if(element.id == project && !foundProject) {
            projectTitle.innerHTML = element.title;
            projectImage.src = `../data/work_images/${element.image}`;
            projectDesc.innerHTML = element.desc;
            foundProject = true;
        }
        console.log(projectData);
    });
};

window.viewProject = viewProject;
const projectList = document.getElementById("project-list");
let currentProjectIndex = 0;
const projects = [
    {
        title: "Проект 1",
        description: "Полное описание проекта 1. Он делает удивительные вещи.",
    },
    {
        title: "Проект 2",
        description: "Полное описание проекта 2. Это просто потрясающе!",
    },
    {
        title: "Проект 3",
        description: "Полное описание проекта 3. Вы должны это увидеть.",
    },
];

document.getElementById("prev").addEventListener("click", () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        updateProjectList();
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        updateProjectList();
    }
});

function updateProjectList() {
    projectList.scrollLeft = currentProjectIndex * (projectList.clientWidth / 3);
}

function openProjectDetails(projectId) {
    const project = projects[currentProjectIndex];
    const detailsContent = document.getElementById("details-content");
    detailsContent.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    document.getElementById("project-details").style.display = "flex";
}

function closeProjectDetails() {
    document.getElementById("project-details").style.display = "none";
}

// Инициализация
updateProjectList();

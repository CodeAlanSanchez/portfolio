
let projects = $("div.project");

let buttons = $(".button-filter");

let projectsToShow = [];

const filter = (word) => {
    for (let i = 0; i < projects.length; i++) {
        if (word === "all") {
            projectsToShow.push(i);
            continue;
        }
        const liList = projects[i].children[1].children[1].children;
        let tags = [];
        for (let j = 0; j < liList.length; j++) {
            tags.push(liList[j].textContent.toLowerCase());
        }
        if (tags.includes(word)) {
            projectsToShow.push(i);
        }
    }

    $(".project-list").empty();
    show(projectsToShow);
    projectsToShow = [];
}

const show = (projectsToHide) => {
        for (let i = 0; i < projectsToHide.length; i++) {
            $(".project-list").append(projects[projectsToHide[i]])
        }
    }

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => filter(buttons[index].textContent.toLowerCase()));
}

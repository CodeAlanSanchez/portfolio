
let projects = $("div.project");

let buttons = document.getElementsByClassName("button-filter");

let projectsToHide = [];

const filter = (word) => {
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.remove("hide");
        if (word === "all") {
            continue;
        }
        const liList = projects[i].children[1].children[1].children;
        let tags = [];
        for (let j = 0; j < liList.length; j++) {
            console.log(liList[j].textContent.toLowerCase());
            tags.push(liList[j].textContent.toLowerCase());
        }
        if (!tags.includes(word)) {
            projectsToHide.push(i);
        }
    }

    hide(projectsToHide);
    projectsToHide = [];
}

const hide = (projectsToHide) => {
    for (let i = 0; i < projectsToHide.length; i++) {
        console.log("hiding");
        projects[projectsToHide[i]].classList.add("hide");
    }
}

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => filter(buttons[index].textContent.toLowerCase()));
}


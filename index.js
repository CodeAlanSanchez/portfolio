
let projects = $("div.project");

let buttons = document.getElementsByClassName("button-filter");

let projectsToHide = [];

const filter = (word) => {
    if (word == "all") {
        return;
    }
    console.log(word);
    
    for (let i = 0; i < projects.length; i++) {
        const liList = projects[i].children[1].children[1].children;
        let tags = [];
        for (let j = 0; j < liList.length; j++) {
            tags.push(liList[j].textContent);
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


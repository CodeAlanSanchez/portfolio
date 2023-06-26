$(document).ready(function() {
    let projects = $("div.project");

    let buttons = $(".button-filter");
    let buttons2 = $(".technologies li");

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
    };

    const show = (projectsToShow) => {
        for (let i = 0; i < projectsToShow.length; i++) {
            $(".project-list").append(projects[projectsToShow[i]]);
        }
    };

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", () => filter(buttons[index].textContent.toLowerCase()));
    }

    for (let index = 0; index < buttons2.length; index++) {
        buttons2[index].addEventListener("click", () => {
            filter(buttons2[index].textContent.toLowerCase());
        });
    }

});

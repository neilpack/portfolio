// Array of Projects
const projects = [
    { filename: "images/projects/portfolio.png", title: "Portfolio Website", link: "https://github.com/neilpack/portfolio",
        description: "I wrote the JavaScript, HTML, and CSS for this entire website you are viewing. All these projects are displayed here.", 
        tags: ["HTML", "CSS", "JavaScript", "Frontend"] },
    { filename: "images/projects/photo.png", title: "Photography Website", link: "https://neilpack.github.io/wdd131/final/index.html",
        description: "Several years ago, I wanted to get into professional photography. While I never took professional photos, I still have a passion for it. This website shows what would have been my photo portfolio so clients could hire me.", 
        tags: ["HTML", "CSS", "JavaScript", "Frontend"] },
    { filename: "images/projects/tenzi.png", title: "Tenzi Game", link: "https://github.com/neilpack/CSE-210/tree/main/final/FinalProject",
        description: "I grew up playing this dice rolling game with my family. It was called Tenzi. I decided to recreate the game in C# with working bots that play against you. This was one of my favorites to make.", 
        tags: ["C#", "OOP", "Game Design"] },
    { filename: "images/projects/darkmode.png", title: "Dark Mode Button", link: "https://neilpack.github.io/wdd131/mission/index.html",
        description: "Simple darkmode dropdown menu created with JavaScript", 
        tags: ["JavaScript"] },
    { filename: "images/projects/blog.png", title: "Blog Website", link: "https://neilpack.github.io/wdd131/blog/index.html",
        description: "Simple blog website that I created when I was first learning JavaScript. While it isn't completely finished, it still shows how far I have come.", 
        tags: ["JavaScript", "CSS", "HTML"] },
  ];

//Create HTML
function projectTemplate(project) {
    return `
        <section class="project">
            <img src="${project.filename}" alt="${project.title}" width="300px" height="auto">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a class="project-link" target="_blank" href="${project.link}"><p>View Project</p></a>
                <ul class="project-tags">
                    ${tagsTemplate(project.tags)}
                </ul>
            </div>
        </section>
    `;
}

//Render tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

//Search handler function
function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProjects = filterProjects(query);
    renderProjects(filteredProjects);
}

// Filter function to match the query in title, description, or tags
function filterProjects(query) {
    const filtered = projects.filter(project => {
        return project.title.toLowerCase().includes(query) ||
               project.description.toLowerCase().includes(query) ||
               (Array.isArray(project.tags) && project.tags.some(tag => tag.toLowerCase().includes(query)));
    });

    return filtered;
}

// Presses search button if enter is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("search-button").click();
  }
});


document.getElementById('search-button').addEventListener('click', searchHandler);

function renderProjects(projectsArray = projects) {
    const photoContainer = document.getElementById('project-container');
    photoContainer.innerHTML = projectsArray.map(projectTemplate).join('');
}
renderProjects();
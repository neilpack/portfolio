// Array of Projects
const projects = [
    { filename: "images/projects/tenzi.png", title: "Tenzi Game", link: "https://github.com/neilpack/CSE-210/tree/main/final/FinalProject",
        description: "I grew up playing this dice rolling game with my family. It was called Tenzi. I decided to recreate the game in C# with working bots that play against you. This was one of my favorites to make.", 
        tags: ["C#", "OOP", "Game Design"] },
    { filename: "images/projects/portfolio.png", title: "Portfolio Website", link: "https://github.com/neilpack/portfolio",
        description: "I wrote the JavaScript, HTML, and CSS for this entire website you are viewing. All these projects are displayed here.", 
        tags: ["HTML", "CSS", "JavaScript", "Frontend"] },
    { filename: "images/projects/photo.png", title: "Photography Website", link: "https://neilpack.github.io/wdd131/final/index.html",
        description: "Several years ago, I wanted to get into professional photography. While I never took professional photos, I still have a passion for it. This website shows what would have been my photo portfolio so clients could hire me.", 
        tags: ["HTML", "CSS", "JavaScript", "Frontend"] },
    { filename: "images/projects/goals.png", title: "Goal Tracker Game", link: "https://github.com/neilpack/CSE-210/tree/main/prove/Develop05",
    description: "This goal tracker game keeps a record of your goals. There are three types of goals that each award different points. I wanted to practice the concept of polymorphism and overriding.", 
    tags: ["C#", "Polymorphism", "Game Design"] },
    { filename: "images/projects/mindfulness.png", title: "Mindfulness App Concept", link: "https://github.com/neilpack/CSE-210/tree/main/prove/Develop04",
    description: "Simple program focusing on the OOP concept of inheritance. This app lets the user go through meditation steps and other mindful activities.", 
    tags: ["C#", "Inheritance"] },
    { filename: "images/projects/journal.png", title: "Journal", link: "https://github.com/neilpack/CSE-210/tree/main/prove/Develop02",
    description: "I love to journal and I thought making a journal in C# would be fun. You can save and load journal files from your computer when running the program.", 
    tags: ["C#", "Abstraction"] },
    { filename: "images/projects/scripture.png", title: "Scripture Memorizer", link: "https://github.com/neilpack/CSE-210/tree/main/prove/Develop03",
    description: "This program helps you memorize a specific scripture by slowly taking away words. I wanted to practice the OOP concept of encapsulation while I wrote this algorithm.", 
    tags: ["C#", "Encapsulation"] },
    { filename: "images/projects/darkmode.png", title: "Dark Mode Button", link: "https://neilpack.github.io/wdd131/mission/index.html",
        description: "Simple darkmode dropdown menu created with JavaScript", 
        tags: ["JavaScript"] },
    { filename: "images/projects/blog.png", title: "Blog Website", link: "https://neilpack.github.io/wdd131/blog/index.html",
        description: "Simple blog website that I created when I was first learning JavaScript. While it isn't completely finished, it still shows how far I have come.", 
        tags: ["JavaScript", "CSS", "HTML"] },
    { filename: "images/projects/recipes.png", title: "Recipe Book", link: "https://neilpack.github.io/wdd131/recipes/index.html",
    description: "Very simple JavaScript search bar for a recipe book.", 
    tags: ["JavaScript"] },
    { filename: "images/projects/coolpics.png", title: "Modal Viewer", link: "https://neilpack.github.io/wdd131/coolpics/index.html",
        description: "This website was created before my professional photography website. The whole point was to practice creating a Modal Viewer. You can click an image and then a larger image will appear.", 
        tags: ["JavaScript", "HTML", "CSS"] },
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
// Data
const projectsData = [
    {
        "name": "Personal website",
        "imgSrc": "./images/website.png",
        "description": "I know basics of front-end development.",
        "link": "https://www.kasra-saeid.github.io",
        "skills": "Tools and Skills: HTML, CSS, JS"
     
    },

    
];

const academiaData = [
    {
        "name": "Top 5% at national university enterance exam. (konkur)",
        "imgSrc": "",
        "description": "At first i applied to mechanical engineering but after 4 terms i changed my branch to Computer Engineering do to my main interest in this field.",
        "link": "",
        "skills": ""
     
    },

];

const publicationData = [
   
    
];


// Functions
function createProjects(projectsData) { 
    var projects = []
    for (var i = 0; i < projectsData.length; i++) {
        var jsonProject = projectsData[i]
        var stringProject = JSON.stringify(jsonProject)
        var project = JSON.parse(stringProject)
        projects.push(project)
    }
    console.log(projects)
    return projects;
}


// Components
function createTile(content) {
    var tileContent = `
        <div class="col-md-2">
            <img class=" tile-image" src="`+content.imgSrc+`"/>
        </div>
        <div class="col-md-10" style="position:relative;">
            <div class="row tile-name">
                `+content.name+`
            </div>
            <br>
            <div class="row tile-description">
                `+content.description+` 
                (for more information<a class="tile-link" target=”_blank” href="`+content.link+`">Click here</a>)
            </div>
            <br>
            <div class="row tile-skills">
                `+content.skills+`
            </div>
        </div>`
    var contentTile = document.createElement('div');
    contentTile.className='row tile';
    contentTile.innerHTML = tileContent;
    return contentTile;
}


// Listerners
var projectButtonPressed = false;
var projectSelectionHandler = document.getElementById('project-btn');
projectSelectionHandler.addEventListener('click', function(e) {

        document.getElementById("resume-content-sec").innerHTML = ""
        var projects = createProjects(projectsData) 
        for(var i = 0; i < projects.length; i++) {
            var project = projects[i]
            var contentTile = createTile(project)
            document.getElementById("resume-content-sec").appendChild(contentTile);
        }
        

    document.getElementById("btn").innerText = "Projects"

});

var academaiButtonPressed = false;
var projectSelectionHandler = document.getElementById('academia-btn');
projectSelectionHandler.addEventListener('click', function(e) {

        document.getElementById("resume-content-sec").innerHTML = ""
        var academias = createProjects(academiaData) 
        for(var i = 0; i < academias.length; i++) {
            var academia = academias[i]
            var contentTile = createTile(academia)
            document.getElementById("resume-content-sec").appendChild(contentTile);
        }
        
    document.getElementById("btn").innerText = "Academia"

});

var publicationButtonPressed = false;
var projectSelectionHandler = document.getElementById('publication-btn');
projectSelectionHandler.addEventListener('click', function(e) {
    if (!publicationButtonPressed) {
        document.getElementById("resume-content-sec").innerHTML = ""
        var publications = createProjects(publicationData) 
        for(var i = 0; i < publications.length; i++) {
            var poublication = publications[i]
            var contentTile = createTile(poublication)
            document.getElementById("resume-content-sec").appendChild(contentTile);
        }
        
    }
    document.getElementById("btn").innerText = "Publications"
    publicationButtonPressed = true;
});

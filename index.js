
import projects from './projects.js';

function getProjectHtml() {
    let projectHtml = `
    <section id = 'projects'>
        <h2>Projects</h2>
        <div class = 'color-box'>
            <ul id ='project-list' class = 'center-box'>`;

    for (let i = 0; i < projects.STORE.projects.length; i++) {
        let current = projects.STORE.projects[i];
        projectHtml += `
        <li class = 'js-project'>
            <h3>${current.title}</h3>
            <div class = 'img-container'>
                <img src="${current.img}" alt="${current.imgAlt}" class = 'project-img'>
                <img src="./images/HTML5.png" alt="The logo for HTML5" class = 'tech-img'>
                <img src="./images/CSS.png" alt="The logo for css3" class = 'tech-img'>
                <img src="./images/JS.png" alt="The logo for javascript" class = 'tech-img'>
            </div>
            <p>${current.desc}</p>
            <a href="${current.live}">Test it yourself</a><br>
            <a href="${current.gitHub}">Github</a>
        </li>`;
    }

    projectHtml += `
            </ul>
        </div>
    </section>`;
    return projectHtml;
}

function render() {
    let html = '';
    html += projects.getBio();
    html += getProjectHtml();
    $('main').html(html);
}

function startBlinking() {
    setInterval(function() {
        $('#js-blinking').toggleClass('invisible');
        setTimeout(function() {
            $('#js-blinking').toggleClass('invisible');
        }, 900);
    }, 1800);
}

function main() {
    render();
    startBlinking();
}

$(main);
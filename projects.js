const STORE = {
    bio: `
    <section id = 'about-me'>
        <h2>About Me</h2>
        <div class = 'color-box'>
            <div class = 'center-box'>
                    <p>I was born in Utah and have lived here my entire life. My favorite place I’ve visited is the pacific northwest, specifically western Washington 
                        in the Seattle area due to the rain, beautiful green forests and cold Pacific Ocean. I would take a grey overcast sky over a blue sunny one any 
                        day and I prefer places with freezing winters rather than impossibly hot summers.</p>
                    <p>I have been interested in problem solving, math, and logic puzzles for as long as I can remember with coding being a more recent development. 
                        The best part about coding for me is if you put your mind to it, pretty much anything is possible within the code you write. I also enjoy the 
                        idea that someone is out there looking for a product I will eventually develop.</p>
                    <p>Something strange about me is my habit of learning during my relaxation time. If I'm doing something that doesn’t require my full attention 
                        I often choose to listen to an educational video in the background. I am also never without a book, so if there is down time, I read. </p>
            </div>
        </div>
    </section>`,
    projects: [
        {
            title: 'Space Quiz',
            img: './images/Space.PNG',
            imgAlt: 'A thumbnail of my space quiz app.',
            desc: 'A simple 5 question quiz designed to test and teach about space.',
            live: 'https://thinkful-ei-heron.github.io/aedan_Josephine_quiz-app/',
            gitHub: 'https://github.com/thinkful-ei-heron/aedan_Josephine_quiz-app'
        },
        {
            title: 'Bookmark App',
            img: './images/Bookmarks.PNG',
            imgAlt: 'A thumbnail of my bookmark app.',
            desc: 'An app that lets one save bookmarks to their favorite websites.',
            live: 'https://thinkful-ei-heron.github.io/Aedan-bookmarks-app/',
            gitHub: 'https://github.com/thinkful-ei-heron/Aedan-bookmarks-app'
        }
    ]
};

const getBio = function() {
    return this.STORE.bio;
};

const getProject = function(index) {
    return this.STORE.projects[index];
};

export default {
    STORE,
    getBio,
    getProject
};
const project_list = [
    {
        title:       "Practice Buddy",
        description: "<em><b>Practice Buddy is still in active development.</em></b><br/><br/>Practice Buddy is a tool to help guitarists and bassists practice modes, chords, and songs. It is written as a single page app in React and uses the newest version of React Router to serve routes.",
        imageSrc:    "images/practicebuddy_logo.png",
        projectLink: "https://smessina.com/practicebuddy/",
        githubLink:  "https://github.com/regexpressyourself/PracticeBuddy",
        techList:    ["React", "JavaScript", "ES6", "Webpack", "HTML", "CSS", "CSS Grid"],
        background:  "background-color:  #F3EFD7"
    },
    {
        title:       "Git Flow",
        description: "Git Flow is an interactive git tutorial that walks users through a git workflow via a step-by-step flowchart. Tutorial content is dynamically generated by manipulating React component state as users work through the flowchart.",
        imageSrc:    "images/GitFlowLogo.png",
        projectLink: "/gitflow",
        githubLink:  "https://www.github.com/regexpressyourself/gitflow",
        techList:    ["React", "React Router v. 3", "JavaScript", "ES6", "HTML", "CSS", "SCSS", "Bootstrap"],
        background:  "background-color: #f9f2f4"
    },
    {
        title:       "Passman",
        description: "Passman is a CLI password management application written in Python for password generation, storage, retrieval, updates, and removal, complete with a MongoDB cloud storage solution using RESTful principles. Available on Pip.",
        imageSrc:    "images/passmanlogo.png",
        projectLink: "https://pypi.python.org/pypi/passman",
        githubLink:  "https://www.github.com/regexpressyourself/passman",
        techList:    ["Python", "Pip", "JSON", "SHA512 Encryption", "REST", "MongoDB"],
        background:  "background-color: #70C1B3"
    },
    {
        title:       "OrderUp HookUp",
        description: "OrderUp HookUp is a restaurant locator, which uses a Node and Express REST API to cross-reference Google location services with the Yelp Fusion Cloud API to find nearby restaurants.",
        imageSrc:    "images/ohlogo.png",
        projectLink: "http://orderuphookup.com",
        githubLink:  "https://www.github.com/regexpressyourself/OrderUp-HookUp",
        techList:    ["JavaScript", "Angular 1", "Node", "Express", "HTML", "CSS", "Bootstrap"],
        background:  "background-color: #E6FAED"
    },
    {
        title:       "FuzzBot",
        description: "FuzzBot is a bot created to take online quizzes. It is implemented as a fuzzy expert system, using fuzzy logic to classify and identify test questions. After each attempt, FuzzBot will display a graph detailing its improvement over time.",
        imageSrc:    "images/fuzzbot.png",
        projectLink: "https://smessina.com/fuzzbot/",
        githubLink:  "https://github.com/regexpressyourself/FuzzBot",
        techList:    ["Python", "Flask", "JavaScript", "ES6", "HTML", "CSS"],
        background:  "background-color:  #E4E4E4"
    },
    {
        title:       "Lysten",
        description: "Lysten is a general-purpose server, implemented using multiplexed I/O with epoll and custom thread pools for concurrency on a multicore system, written in C.",
        imageSrc:    "images/lysten.png",
        projectLink: null,
        githubLink:  "https://github.com/regexpressyourself/Lysten",
        techList:    ["C", "Thread Pools", "Epoll Units", "Pseudo TTYs"],
        background:  "background-color:  #FFFAFF"
    },
    {
        title:       "Woody At Random",
        description: "Interactive Woody Allen film database, capabale of " +
        "recommending films at random or with interactive search",
        imageSrc:    "images/woody.png",
        techList:    ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Apache", "Bootstrap"],
        background:  "background-color: #000000",
        projectLink: "http://www.woodyatrandom.com",
        githubLink:  "https://www.github.com/regexpressyourself/Woody-At-Random"
    },
    {
        title:       "Q Programming Language",
        description: " The Q Programming Language is my own programming language, which allows for developers to manipulate a queue data structure. The Q Programming Language supports both compiled and interpreted runtimes, either compiling programs into an executable, or running programs as they are parsed.",
        imageSrc:    "images/qlanguage.png",
        projectLink: "/Q-Programming-Language",
        githubLink:  "https://www.github.com/regexpressyourself/Q-Programming-Language",
        background:  "background-color: #FFF176",
        techList:    ["Java"]
    },
    {
        title:       "Scheduler.py",
        description: "One of my first programs, Scheduler.py is a command-line program that automates retail employee scheduling, including day off requests and preferred shifts in schedule generation.",
        imageSrc:    "images/scheduler.png",
        projectLink: null,
        githubLink:  "https://www.github.com/regexpressyourself/Scheduler.py",
        background:  "background-color: #282A36",
        techList:    ["Python", "Excel"]
    },
    {
        title:       "Turbo Pup Band Site",
        description: "A prototype of a Bootstrap website I created for the band Turbo Pup, using HTML, CSS, jQuery, and Twitter's Bootstrap.",
        imageSrc:    "images/turbo.png",
        projectLink: "/Turbo-Pup-Site",
        githubLink:  "https://www.github.com/regexpressyourself/Turbo-Pup-Site",
        techList:    ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        background:  'background-image: url("images/turbo-bg.jpg")'
    }

];


let get_tech = (tech_list) => {
    let tech_html = "";
    if (tech_list.length > 2) {
        for (let tech_item of tech_list){
            if (tech_list.indexOf(tech_item) == tech_list.length-1) {
                tech_html += `and ${tech_item}.`;
            }
            else {
                tech_html += `${tech_item}, `;
            }
        }
    }
    else if (tech_list.length == 2){
        tech_html += `${tech_list[0]} and ${tech_list[1]}`;
    }
    else{
        tech_html += tech_list[0];
    }

    return `
        <p class='project-tech'>
            ${tech_html}
        </p>
        `;
}

let get_links= (live, gh, title) => {
    let link_html = "";
    for (let link of [live, gh]) {
        if (!link) continue;
        link_text = (link == live) ?
            "See it Live."  :
            "See the Code." ;

        link_html += `
            <p class='proj-link'>
                <a title="Sam Messina's link to ${title}" href='${link}'>
                    ${link_text}
                </a>
            </p>
            `;
    }
    return link_html;
}

let get_text_div = (current_proj, project_num) => {
    link_text = get_links(current_proj.projectLink, 
        current_proj.githubLink, 
        current_proj.title);
    return `
        <div class='project-text-container'>
            ${get_tech(current_proj.techList)}
            <h3>
            <span class='header-${project_num % 4}'>${current_proj.title[0]}${current_proj.title.substring(1)}
            </span>
            </h3>
            <p class='proj-desc'>${current_proj.description}</p>
            ${link_text}
        </div>
        `;
};

let get_img_div= (current_proj) => {
    let img_src    = current_proj.imageSrc;
    let background = current_proj.background;
    let link       = current_proj.projectLink ? 
        current_proj.projectLink : 
        current_proj.githubLink;
    return `
        <div class='project-image-container'>
            <a href='${link}' title=''>
                <div class='project-image' style='${background}'>
                    <img alt='project logo' src='${img_src}' />
                </div>
            </a>
        </div>
        `;
};

let get_project_html = (current_proj, project_num) =>
{
    let text_div     = get_text_div(current_proj, project_num);
    let img_div      = get_img_div(current_proj);
    let inner_html;

    inner_html = (project_num % 2 == 0) ?  
        text_div + img_div  :
        img_div  + text_div ;

    return `
        <div class='project-item'>
            ${inner_html}
        </div>
        `;
}



(function() {
    let project_html = "";
    for (let i = 0; i < project_list.length; i++) {
        project_html += `
                ${get_project_html(project_list[i], i)}
            `;
    }

    document.getElementById("project-list").innerHTML = project_html;
    document.getElementById("cr-date").innerHTML = new Date().getFullYear();
})();




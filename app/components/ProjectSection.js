import React    from 'react';
import Project  from './Project';

class ProjectSection extends React.Component {
    /* ProjectSection holds the entire project section,
     * delegating to children componenets for individual project
     * listing.
     *
     * Project list is constructed from objects passed to projectList,
     * declared at the bottom of this file.
     */
    constructor(props) {
        super(props);
        this.state = {
            projectList: [] // list of project objects
        }
    }

    componentDidMount() {
        /* Create project list when component mounts*/
        this.setState({
            projectList: this.createProjectList()
        });
    }

    createProjectList() {
        /* Create a list of Project components to be rendered.
         *
         * Project components are passed ProjectObject, containing
         * relevant data for that specific project, as well as whether
         * the project image should be displayed on the right .
         */

        let projectComponentList = []; // return list of Project Components
        let i = 0; // acts as a key

        for (let projectObject of projectList ) {
            let imageOnRight = (i % 2 == 0); // alternate image on right and left
            projectComponentList.push(
                <Project key={i++}
                         imageOnRight={imageOnRight}
                         projectObject={projectObject}></Project>
            )
        }
        return projectComponentList;
    }

    render() {
        /* Renders a bootstrap row and column,
           with the project list contained inside*/
        return (
            <section id="project-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 center">
                            <h2>Projects</h2>
                            <div>
                                {this.state.projectList}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const projectList = [
    /* List of project data. Objects added to the
     * list will be displayed as a project on the page

     * Each object should have:
     *     1. Title
     *     2. Description
     *     3. Source of image to be displayed
     *     4. List of technologies used
     *     5. Background css rule for the image
     *     6. Link to code on GitHub
     *     7. Link to project (optional)
     */

    {
        title:       "Git Flow",
        description: "Stateful flow chart that walks users through proper usage of git.",
        imageSrc:    "http://smessina.com/public/GitFlowLogo.png",
        projectLink: "http://smessina.com/gitflow",
        githubLink:  "https://www.github.com/regexpressyourself/gitflow",
        techList:    ["react", "js", "html", "css", "bootstrap"],
        background:  {backgroundColor: '#f9f2f4'}
    },
    {
        title:       "OrderUp HookUp",
        description: "Mobile-first web app that provides an easy," +
                     " intuitive way to find restaurants around you.",
        imageSrc:    "http://smessina.com/public/ohlogo.png",
        projectLink: "http://orderuphookup.com",
        githubLink:  "https://www.github.com/regexpressyourself/OrderUp-HookUp",
        techList:    ["js", "node", "angular", "html", "css", "bootstrap"],
        background:  {backgroundColor: '#E6FAED'}
    },
    {
        title:       "Woody At Random",
        description: "Interactive Woody Allen film database, capabale of " +
                     "recommending films at random or with interactive search",
        imageSrc:    "http://smessina.com/public/woody.png",
        techList:    ["php", "html", "css", "js", "mysql", "apache", "bootstrap"],
        background:  {backgroundColor: '#000000'},
        projectLink: "http://www.woodyatrandom.com",
        githubLink:  "https://www.github.com/regexpressyourself/Woody-At-Random"
    },
    {
        title:       "Q Programming Language",
        description: "A Programming language developed to allow simple queue manipulation",
        imageSrc:    "http://smessina.com/public/qlanguage.png",
        projectLink: "http://smessina.com/Q-Programming-Language",
        githubLink:  "https://www.github.com/regexpressyourself/Q-Programming-Language",
        background:  {backgroundColor: '#FFF176'},
        techList:    ["java"]
    },
    {
        title:       "Scheduler.py",
        description: "Command-line program that automates retail employee scheduling",
        imageSrc:    "http://smessina.com/public/scheduler.png",
        projectLink: "",
        githubLink:  "https://www.github.com/regexpressyourself/Scheduler.py",
        background:  {backgroundColor: '#282A36'},
        techList:    ["python", "excel"]
    },
    {
        title:       "Turbo Pup Band Site",
        description: "Website for the band Turbo Pup",
        imageSrc:    "http://smessina.com/public/turbo.png",
        projectLink: "http://smessina.com/Turbo-Pup-Site",
        githubLink:  "https://www.github.com/regexpressyourself/Turbo-Pup-Site",
        techList:    ["html", "css", "js", "bootstrap"],
        background:  {backgroundImage: 'url("http://smessina.com/public/turbo-bg.png")'}
    }

];

export default ProjectSection;

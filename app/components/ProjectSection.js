import React    from 'react';
import Project  from './Project';
import {Center,
        ProjectRowItem} from '../styles';


class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: []
        }
    }

    componentDidMount() {
        this.setState({
            projectList: this.createProjectList()
        });
    }

    createProjectList() {
        let projectComponentList = [];

        let i = 0
        for (let projectObject of projectList ) {
            let imageOnRight = (i % 2 == 0);
            projectComponentList.push(
                <Project key={i++}
                         imageOnRight={imageOnRight}
                         projectObject={projectObject}></Project>
            )
        }
        return projectComponentList;
    }

    render() {
        return (
            <section id="project-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12" style={Center}>
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
    {
        title: "Git Flow",
        description: "Stateful flow chart that walks users through proper usage of git.",
        imageSrc: "http://smessina.com/img/GitFlowLogo.png",
        techList: ["react", "js", "html", "css", "bootstrap"],
        background: {backgroundColor: '#f9f2f4'},
        projectLink: "http://smessina.com/gitflow",
        githubLink: "https://www.github.com/regexpressyourself/gitflow"
    },
    {
        title: "OrderUp HookUp",
        description: "Mobile-first web app that provides an easy, intuitive way to find restaurants around you.",
        imageSrc: "http://smessina.com/img/ohlogo.png",
        techList: ["js", "node", "angular", "html", "css", "bootstrap"],
        background: {backgroundColor: '#E6FAED'},
        projectLink: "http://orderuphookup.com",
        githubLink: "https://www.github.com/regexpressyourself/OrderUp-HookUp"
    },
    {
        title: "Woody At Random",
        description: "Interactive Woody Allen film database, capabale of recommending films at random or with interactive search",
        imageSrc: "http://smessina.com/img/woody.png",
        techList: ["php", "html", "css", "js", "mysql", "apache", "bootstrap"],
        background: {backgroundColor: '#000000'},
        projectLink: "http://www.woodyatrandom.com",
        githubLink: "https://www.github.com/regexpressyourself/Woody-At-Random"
    },
    {
        title: "Q Programming Language",
        description: "A Programming language developed to allow simple queue manipulation",
        imageSrc: "http://smessina.com/img/qlanguage.png",
        background: {backgroundColor: '#FFF176'},
        techList: ["java"],
        projectLink: "http://smessina.com/Q-Programming-Language",
        githubLink: "https://www.github.com/regexpressyourself/Q-Programming-Language"
    },
    {
        title: "Scheduler.py",
        description: "Command-line program that automates retail employee scheduling",
        imageSrc: "http://smessina.com/img/scheduler.png",
        background: {backgroundColor: '#282A36'},
        techList: ["python", "excel"],
        projectLink: "",
        githubLink: "https://www.github.com/regexpressyourself/Scheduler.py"
    },
    {
        title: "Turbo Pup Band Site",
        description: "Website for the band Turbo Pup",
        imageSrc: "http://smessina.com/img/turbo.png",
        techList: ["html", "css", "js", "bootstrap"],
        background: {backgroundImage: 'url("http://smessina.com/img/turbo-bg.png")'},
        projectLink: "http://smessina.com/Turbo-Pup-Site",
        githubLink: "https://www.github.com/regexpressyourself/Turbo-Pup-Site"
    }

];

export default ProjectSection;

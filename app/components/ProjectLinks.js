import React from 'react';

class ProjectLinks extends React.Component {
    /* Github and Project Links for each project
     * (both large and small view)
     */
    constructor(props) {
        super(props);
        this.state={
            view: this.getView() // the links
        }
    }

    getView() {
        /* Wraps the links in a wrapping div*/
        let githubLink  = this.addGithubLink();
        let projectLink = this.addProjectLink();

        return (
            <div className="project-link-wrapper row">
                {githubLink}
                {projectLink}
            </div>
        )
    }

    addProjectLink() {
        /* Returns a link to the project itself, if it exists*/
        if (this.props.projectLink) {
            return (
                <a href={this.props.projectLink}
                   className="clickable project-link">
                    <i className="fa fa-link"></i> Link
                </a>
            )
        }
        else {
            return (
                ""
            )
        }
    }

    addGithubLink() {
        /* Returns a link to the project on Github*/
        return (
            <a href={this.props.githubLink} className="clickable project-link">
                <i className="fa fa-github"></i> Github
            </a>
        )
    }

    render() {
        return (
            this.state.view
        )
    }
}

export default ProjectLinks;

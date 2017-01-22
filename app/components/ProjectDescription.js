import React from 'react';
import ProjectLinks from './ProjectLinks';

function ProjectDescription(props) {
    /* Shows the description, tect list, title, and
     * links for a given project on wider screens.
     */
    return (
        <div>
            <h3>{props.title}</h3>
            <span className="hidden-xs hidden-sm" >
                {props.techList}
            </span>
            <p>
                {props.description}
            </p>
            <ProjectLinks
                githubLink={props.githubLink}
                projectLink={props.projectLink} />
        </div>
    )
}

export default ProjectDescription;

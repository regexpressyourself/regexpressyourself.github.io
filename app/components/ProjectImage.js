import React from 'react';

function ProjectImage(props) {
    /* Shows the image for a project on wider screens*/

    return (
        <span>
            <div style={props.backgroundStyle}
                 className="project-image-background">

                {/* Picture links to project if possible, github if not */}
                <a href={props.projectLink || props.githubLink}>
                    <img className="img-responsive"
                         alt="Project Logo"
                         src={props.imageSrc} />
                </a>
            </div>
            <span className="hidden-md hidden-lg" >
                {props.techList}
            </span>
        </span>
    )
}

export default ProjectImage;

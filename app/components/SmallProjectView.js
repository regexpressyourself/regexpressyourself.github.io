import React from 'react';
import ProjectLinks from './ProjectLinks';

function SmallProjectView (props) {
    /* Show the project view for screens smaller than 768 px*/

    return (
        <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
            <h3>{props.title}</h3>

            {/* Picture links to project if possible, github if not */}
            <a href={props.projectLink || props.githubLink}>

                {/* Give the background of the picture the proper style */}
                <div style={props.backgroundStyle}
                     className="project-image-background">
                    <img className="img-responsive"
                         alt="Project Logo"
                         src={props.imageSrc} />
                </div>
            </a>

            {/* Add project links underneath */}
            <ProjectLinks
                githubLink={props.githubLink}
                projectLink={props.projectLink} />
        </div>
    )
}

export default SmallProjectView;

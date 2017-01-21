import React from 'react';
import ProjectLinks from './ProjectLinks';
import {SmallProjectRowItem} from '../styles';

class SmallProjectView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="col-xs-12 hidden-sm hidden-md hidden-lg" style={SmallProjectRowItem}>
                <h3>{this.props.title}</h3>

                <a href={this.props.projectLink || this.props.githubLink}>
                    <div style={this.props.backgroundStyle}
                         className="project-image-background">
                        <img className="img-responsive"
                             alt="Project Logo"
                             src={this.props.imageSrc} />
                    </div>
                </a>
                <ProjectLinks
                    githubLink={this.props.githubLink}
                    projectLink={this.props.projectLink} />
            </div>
        )
    }
}

export default SmallProjectView;

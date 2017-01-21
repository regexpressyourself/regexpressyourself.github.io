import React from 'react';
import {ProjectRowItem} from '../styles';

class ProjectImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLink: this.getImageLink()
        };
    }

    getImageLink() {
        return this.props.projectLink ? this.props.projectLink : this.props.githubLink;
    }

    render() {
        return (
            <div className="col-sm-6 hidden-xs" style={ProjectRowItem}>
                <div style={this.props.backgroundStyle}
                     className="project-image-background">
                    <a href={this.state.imageLink}>
                    <img className="img-responsive"
                         alt="Project Logo"
                         src={this.props.imageSrc} />
                    </a>
                </div>
                <span className="hidden-md hidden-lg" >
                    {this.props.techList}
                </span>
            </div>
        )
    }
}

export default ProjectImage;

import React from 'react';
import ProjectLinks from './ProjectLinks';
import {ProjectRowItem,
        SmallProjectRowItem} from '../styles';

class ProjectDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-6 hidden-xs" style={ProjectRowItem}>
                <h3>{this.props.title}</h3>
                <span className="hidden-xs hidden-sm" >
                    {this.props.techList}
                </span>
                <p>
                    {this.props.description}
                </p>
                <ProjectLinks
                    githubLink={this.props.githubLink}
                    projectLink={this.props.projectLink} />
            </div>
        )
    }
}

export default ProjectDescription;

import React from 'react';
import {ProjectRowItem,
        SmallProjectRowItem} from '../styles';

class ProjectLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            view: this.getView()
        }
    }

    getView() {
        if (this.props.projectLink) {
            return (
                <div className="project-link-wrapper row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <a href={this.props.projectLink} className="clickable project-link left">
                            <i className="fa fa-link"></i> Link
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <br className="hidden-sm hidden-md hidden-lg"/>
                        <a href={this.props.githubLink} className="clickable project-link right">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="project-link-wrapper row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <a href={this.props.githubLink} className="clickable project-link">
                            <i className="fa fa-github"></i> Github
                        </a>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.view}
            </div>
        )
    }
}

export default ProjectLinks;

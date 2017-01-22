import React              from 'react';
import ProjectImage       from './ProjectImage';
import ProjectDescription from './ProjectDescription';

class LargeProjectView extends React.Component {
    /* The project view shown on screens wider than 768 px*/

    constructor(props) {
        super(props);
        this.state = {
            image:       [],
            description: []
        }
    }

    componentDidMount() {
        this.setState({
            image:        this.createImage(),
            description:  this.createDescription()
        });
    }

    createDescription() {
        /* Creates a ProjectDescription component for the
         * given project
         */
        return (
            <ProjectDescription title={this.props.title}
                                description={this.props.description}
                                techList={this.props.techList}
                                githubLink={this.props.githubLink}
                                projectLink={this.props.projectLink} />
        )
    }

    createImage() {
        /* Creates a ProjectImage component for the
         * given project
         */
        return (
            <ProjectImage
                imageSrc={this.props.imageSrc}
                techList={this.props.techList}
                githubLink={this.props.githubLink}
                projectLink={this.props.projectLink}
                backgroundStyle={this.props.backgroundStyle} />
        )
    }

    render() {
        /* Return the proper layout. The
         * imageOnRight prop will decide whether
         * the image is on the right or left
         */
        if (this.props.imageOnRight) {
            return (
                <div className="row project-row">
                    <div className="col-sm-6 hidden-xs project-col">
                        {this.state.description}
                    </div>
                    <div className="col-sm-6 hidden-xs project-col">
                        {this.state.image}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="row project-row">
                    <div className="col-sm-6 hidden-xs project-col">
                        {this.state.image}
                    </div>
                    <div className="col-sm-6 hidden-xs project-col">
                        {this.state.description}
                    </div>
                </div>
            )
        }
    }
}

export default LargeProjectView;

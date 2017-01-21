import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectDescription from './ProjectDescription';
import SmallProjectView from './SmallProjectView';
import {ProjectRowContainer} from '../styles';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            imageSrc: ""
        }
        this.createComponents = this.createComponents.bind(this);
    }
    componentDidMount() {
        if (this.props.projectObject) {
            this.setState({
                title:           this.props.projectObject.title,
                imageSrc:        this.props.projectObject.imageSrc,
                description:     this.props.projectObject.description,
                backgroundStyle: this.props.projectObject.background,
                projectLink:     this.props.projectObject.projectLink,
                githubLink:      this.props.projectObject.githubLink,
                techList:        this.props.projectObject.techList,
                imageOnRight:    this.props.projectObject.imageOnRight
            }, this.createComponents);
        }
    }

    createComponents() {
        this.setState({
            descriptionComponent: this.createDescription(),
            imageComponent:       this.createImage(),
            smallViewComponent:   this.createSmallView()
        });
    }

    createDescription() {
        let techImageList = this.createTechImageList();
        return (
            <ProjectDescription title={this.state.title}
                                description={this.state.description}
                                techList={techImageList}
                                githubLink={this.state.githubLink}
                                projectLink={this.state.projectLink} />
        )
    }

    createImage() {
        let techImageList = this.createTechImageList();
        return (
            <ProjectImage
                imageSrc={this.state.imageSrc}
                techList={techImageList}
                githubLink={this.state.githubLink}
                projectLink={this.state.projectLink}
                backgroundStyle={this.state.backgroundStyle} />
        )
    }

    createTechImageList() {
        return this.state.techList.map(function(techItem) {
            let techImageSource = "./public/" + techItem + ".svg";
            return <img alt="Tech logo"
                        key={techImageSource}
                        src={techImageSource}
                        className="tech-logo-image" />
        });
    }

    createSmallView() {
        let techImageList = this.createTechImageList();
        return (
            <SmallProjectView
                imageSrc={this.state.imageSrc}
                githubLink={this.state.githubLink}
                techList={techImageList}
                projectLink={this.state.projectLink}
                title={this.state.title}
                description={this.state.description}
                backgroundStyle={this.state.backgroundStyle} />
        )
    }

    render() {
        if (this.props.imageOnRight) {
            return (
                <div className="row project-row">
                    {this.state.descriptionComponent}
                    {this.state.imageComponent}
                    {this.state.smallViewComponent}
                </div>
            )
        }
        else {
            return (
                <div className="row project-row">
                    {this.state.imageComponent}
                    {this.state.descriptionComponent}
                    {this.state.smallViewComponent}
                </div>
            )
        }
    }
}

export default Project;

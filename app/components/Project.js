import React            from 'react';
import SmallProjectView from './SmallProjectView';
import LargeProjectView from './LargeProjectView';

class Project extends React.Component {
    /* Creates the full row for a given project*/

    constructor(props) {
        super(props);
        this.state = {
            title:           "",
            imageSrc:        "",
            description:     "",
            backgroundStyle: "",
            projectLink:     "",
            githubLink:      "",
            techList:        ""
        }
        this.createComponents = this.createComponents.bind(this);
    }
    componentDidMount() {
        /* Get properties off the projectObject passed in from
         * ProjectSection, then create the large screen and
         * small screen components for the project
         */

        if (this.props.projectObject) {
            this.setState({
                title:           this.props.projectObject.title,
                imageSrc:        this.props.projectObject.imageSrc,
                description:     this.props.projectObject.description,
                backgroundStyle: this.props.projectObject.background,
                projectLink:     this.props.projectObject.projectLink,
                githubLink:      this.props.projectObject.githubLink,
                techList:        this.props.projectObject.techList
            }, this.createComponents);
        }
    }

    createComponents() {
        /* Creates large and small screen versions of
         * the project view
         */
        this.setState({
            largeViewComponent:   this.createLargeView(),
            smallViewComponent:   this.createSmallView()
        });
    }


    createTechImageList() {
        /* Creates a list of logos for each piece of
         * tech passed to the project
         */
        return this.state.techList.map(function(techItem) {
            let techImageSource = "./public/" + techItem + ".svg";
            return <img alt="Tech logo"
                        key={techImageSource}
                        src={techImageSource}
                        className="tech-logo-image" />
        });
    }

    createLargeView() {
        /* Creates a view that shows up on screens wider
         * than 768 px
         */
        let techImageList = this.createTechImageList();
        return (
            <LargeProjectView
                imageSrc={this.state.imageSrc}
                imageOnRight={this.props.imageOnRight}
                githubLink={this.state.githubLink}
                techList={techImageList}
                projectLink={this.state.projectLink}
                title={this.state.title}
                description={this.state.description}
                backgroundStyle={this.state.backgroundStyle} />
        )

    }

    createSmallView() {
        /* Creates a view that shows up on screens smaller
         * than 768 px
         */
        let techImageList = this.createTechImageList();
        return (
            <SmallProjectView
                title={this.state.title}
                imageSrc={this.state.imageSrc}
                githubLink={this.state.githubLink}
                projectLink={this.state.projectLink}
                backgroundStyle={this.state.backgroundStyle} />
        )
    }

    render() {
        /* Large and small view are both rendered,
         * but are only shown when specified by using
         * bootstrap's hidden classes
         */
        return (
            <div>
                {this.state.largeViewComponent}
                {this.state.smallViewComponent}
            </div>
        )
    }
}

export default Project;

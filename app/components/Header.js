import React       from 'react';
import { Link } from 'react-router';
import { HeaderContainerStyle,
         ChevronStyle,
         HeaderIcon,
         HeaderInnerStyle} from '../styles';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollToProjects() {
        $(document).ready(function () {
            $("html, body").animate({
                scrollTop: $("#project-section").offset().top
            }, 500);
        });
    }
    scrollToContact() {
        $(document).ready(function () {
            $("html, body").animate({
                scrollTop: $("#contact-section").offset().top
            }, 500);
        });
    }

    render() {
        return (
            <header className="conatiner" style={HeaderContainerStyle}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div style={HeaderInnerStyle}>
                            <i style={HeaderIcon} className="fa fa-code" />
                            <h1>Sam Messina</h1>
                            <p>Student | Developer</p>
                            <br/>
                        </div>
                    </div>
                    <div onClick={this.scrollToProjects} className="scrolling-chevron">
                        <i className="fa fa-chevron-down" />
                    </div>
                </div>
            </header>


        )
    }
}

export default Header;

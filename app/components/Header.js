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
            <header style={HeaderContainerStyle}>
                <div style={HeaderInnerStyle}>
                    <i style={HeaderIcon} className="fa fa-code" />
                    <h1>Sam Messina</h1>
                    <p>Student | Developer</p>
                    <br/>
                </div>
                <span onClick={this.scrollToProjects} className="scrolling-chevron">
                    <i className="fa fa-chevron-down" />
                </span>
            </header>


        )
    }
}

export default Header;

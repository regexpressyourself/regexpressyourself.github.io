import React    from 'react';
import {Center,
        StaticWidth} from '../styles';

class Contact extends React.Component {
    render() {
        return (
            <section id="contact-section">
                <div className="row">
                    <div className="col-xs-12" style={Center}>
                        <h2 style={Center}>Get in touch.</h2>
                        <a href="mailto:sam@smessina.com">
                        <p style={StaticWidth} className="clickable">
                            <i className="fa fa-envelope"></i>
                            sam@smessina.com
                        </p>
                        </a>
                        <br/>
                        <a href="https://www.github.com/regexpressyourself">
                        <p style={StaticWidth} className="clickable">
                            <i className="fa fa-github"></i>
                            github.com/regexpressyourself
                        </p>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;

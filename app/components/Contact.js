import React    from 'react';

function Contact(props) {
    /* The contact section, with links to my email
     * and github
     */
    return (
        <section id="contact-section">
            <div className="row">
                <div className="col-xs-12 center">
                    <h2 className="center">Get in touch.</h2>
                    <a href="mailto:sam@smessina.com">
                        <p className="clickable contact-clickable">
                            <i className="fa fa-envelope"></i>
                            sam@smessina.com
                        </p>
                    </a>
                    <br/>
                    <a href="https://www.github.com/regexpressyourself">
                        <p className="clickable contact-clickable">
                            <i className="fa fa-github"></i>
                            github.com/regexpressyourself
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;

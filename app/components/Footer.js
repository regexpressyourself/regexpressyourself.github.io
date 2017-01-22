import React    from 'react';

class Footer extends React.Component {
    /* Footer section, with auto-updating year*/
    render() {
        return (
            <footer className="center">
                <div className="footer-below">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Sam Messina {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

import React    from 'react';
import {Center} from '../styles';

class Footer extends React.Component {
    render() {
        return (
            <footer style={Center}>
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

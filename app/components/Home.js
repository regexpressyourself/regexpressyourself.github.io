import React    from 'react';
import Header from './Header';
import ProjectSection from './ProjectSection';
import Contact  from './Contact';
import Footer   from './Footer';
import '../styles/main.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <ProjectSection />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;

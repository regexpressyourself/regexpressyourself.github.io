import React          from 'react';
import ProjectSection from './ProjectSection';
import Contact        from './Contact';
import Footer         from './Footer';
import '../styles/main.css';

class Home extends React.Component {
    /* Main component calls everything but the header,
     * which is hardcoded to index.html
     */
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

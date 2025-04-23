import React from 'react'
import Document from './components/document'
import TopNav from './components/topNav'
import Intro from './components/intro'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import BackToTop from './components/backTop'
import Preloader from './components/preloader'

export const App: React.FC = () => {
    return (
        <div className="position-relative">
            <Document />
            <TopNav />
            <section id="intro"><Intro /></section>
            <section id="resume"><Resume /></section>
            <section id="portfolio"><Portfolio /></section>
            <Footer />
            <BackToTop />
            <Preloader />
        </div>
    );
};

export default App;
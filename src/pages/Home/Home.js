import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
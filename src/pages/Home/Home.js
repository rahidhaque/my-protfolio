import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <div className='px-0 lg:px-12 rounded shadow-lg'>
                <Banner></Banner>
            </div>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import { faBookReader, faLaptopCode, faMobileAlt, faLightbulb, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import about from '../../images/myabout.png'
import Footer from '../Home/Footer';


const About = () => {
    return (
        <div>
            <div className='text-center mt-5 font-bold grid grid-cols-1 lg:grid-cols-2 place-items-center'>
                <div>
                    <h2 className='text-2xl' style={{ textDecorationLine: 'underline' }}><FontAwesomeIcon className='px-2' icon={faBookReader} /> Education</h2>
                    <ul class="steps steps-vertical">
                        <li class="step step-primary">American International University Bangladesh (AIUB)</li>
                        <li class="step step-primary">Bachelor's Degree in Computer Science</li>
                        <li class="step step-primary">Year of Passing : January 2017 to October 2021</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl mb-3' style={{ textDecorationLine: 'underline' }}><FontAwesomeIcon className='px-2' icon={faLaptopCode} /> Skills</h2>
                    <ul class="steps">
                        <li class="step step-primary">Javascript</li>
                        <li class="step step-primary">React JS</li>
                        <li class="step step-primary">Node JS</li>
                        <li class="step step-primary">Express JS</li>
                        <li class="step step-primary">Mongo DB</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-5 text-2xl font-bold' style={{ textDecorationLine: 'underline' }}>My Services</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center'>
                    <div class="card w-96 bg-primary shadow-xl mt-2">
                        <div class="card-body">
                            <p className='text-center text-xl'><FontAwesomeIcon className='px-2' icon={faMobileAlt} /></p>
                            <p className='text-center font-bold text-xl'>Responsive Design</p>
                            <p class="text-center">I make pixel perfect design from figma file or any design from any clients. It will be easily be viewable in both mobile and web.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary shadow-xl mt-2">
                        <div class="card-body">
                            <p className='text-center text-xl'><FontAwesomeIcon className='px-2' icon={faLightbulb} /></p>
                            <p className='text-center font-bold text-xl'>Unique Ideas</p>
                            <p class="text-center">I try to provide excellent ideas to any projects I make. I will provide and suggest unique ideas to any clients for website design.</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-primary shadow-xl mt-2">
                        <div class="card-body">
                            <p className='text-center text-xl'><FontAwesomeIcon className='px-2' icon={faComments} /></p>
                            <p className='text-center font-bold text-xl'>Agile Development</p>
                            <p class="text-center">Website made by me will follow agile process. In response to customer I will maintain the website regularly and make new changes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center mt-5 text-2xl font-bold' style={{ textDecorationLine: 'underline' }}>About Me</h2>
                <div class="hero bg-base-200 mt-5">
                    <div class="hero-content flex-col lg:flex-row">
                        <img style={{ width: '400px', height: '300px' }} src={about} alt='' />
                        <div>
                            <h1 class="text-5xl font-bold max-w-lg">I'm a web developer, I can develop anything to your needs!</h1>
                            <p class="py-6 max-w-lg">My name is S M RAHID HAQUE. My home district is Shariatpur and I am currently residing in Dhaka, Segunbagicha. I am very dedicated in developing website which was my hobby since I was admitted in AIUB. Excellent faculties encouraged me to move forward with my passion</p>
                            <p class="py-6 max-w-lg">Currently I developed some projects with react js. You can see some of my projects here. Besides that I am a quick learner, I can cope up with technology changes by following documentation. I am always open to learn new things to improve myself daily.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
import React from 'react';
import about from '../../images/about.png'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div class="hero h-full lg:h-[60vh] bg-accent mt-5 rounded">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={about} class="max-w-sm rounded-lg shadow-2xl" alt='about' />
                <div className='max-w-lg mx-5'>
                    <h1 class="text-5xl font-bold">Hi I am S M RAHID HAQUE</h1>
                    <p class="py-6">Recently I have graduated from AIUB. I am actively looking for an web development position. I am skilled in javascript, HTML5, CSS3. I am very passionate about making web applications. I want to make people's life easier by making useful applications which will benefit the society.</p>
                    <a href='https://drive.google.com/file/d/1sY6iUHMTjpEhRsf_Mo394g7M2A12v7g_/view?usp=sharing' className="btn btn-primary">Download Resume<FontAwesomeIcon className='px-2' icon={faDownload} /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
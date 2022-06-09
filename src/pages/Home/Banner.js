import React from 'react';

const Banner = () => {
    return (
        <div class="hero h-full lg:h-[60vh] bg-accent mt-5 rounded">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                <div className='max-w-lg mx-5'>
                    <h1 class="text-5xl font-bold">Hi I am S M RAHID HAQUE</h1>
                    <p class="py-6">Recently I have graduated from AIUB. I am actively looking for an web development position. I am skilled in javascript, HTML5, CSS3. I am very passionate about making web applications. I want to make people's life easier by making useful applications which benefit the society.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
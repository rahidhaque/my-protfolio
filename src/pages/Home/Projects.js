import React from 'react';
import pondit from '../../images/pondit-tutor.JPG'
import grocery from '../../images/Super-Grocery-Factory.JPG'
import electronics from '../../images/Rh-Electronics.JPG'
const Projects = () => {
    return (
        <div>
            <h2 className='text-center font-bold mt-5 text-2xl'>My Projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 place-items-center'>
                <div class="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={pondit} alt="Project 1" style={{ width: '350px', height: '200px' }} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Pondit Tutor
                        </h2>
                        <p>This is a independent service provider application. This app advertise a tutor who is willing to provide his service to the people. This page has full authentication system. User can book his services and secure their child's future.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">React Js</div>
                            <div class="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                </div>
                <div class="card w-80 lg:w-96  bg-base-100 shadow-xl">
                    <figure><img src={grocery} alt="Project 2" style={{ width: '350px', height: '200px' }} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Super Grocery Factory
                        </h2>
                        <p>This a type of warehouse website where grocery products are stored in bulk for selling. New stock can be added. Stock of the product can also be increased. User can add, delete, update any product in the system</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">React Js</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Mongo Db</div>
                            <div class="badge badge-outline">Node Js</div>
                        </div>
                    </div>
                </div>
                <div class="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img src={electronics} alt="Project 3" style={{ width: '350px', height: '200px' }} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            RH Electronics and Co.
                        </h2>
                        <p>This is a type of manufacture website. This project has full authentication of admin and user. This project also has dashboard of each type of user. Admin can add new products and user can book for products with minimum quantity for each purchase and many more.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">React Js</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Mongo Db</div>
                            <div class="badge badge-outline">Node Js</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
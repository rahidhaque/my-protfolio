import React from 'react';
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div>
            <h2 className='font-bold text-center mt-5'>Contact Now</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Important Contact Infos</h2>
                        <p className='py-2'><FontAwesomeIcon className='px-2' icon={faLandmark} /> 76 Segunbagicha</p>
                        <p className='py-2'><FontAwesomeIcon className='px-2' icon={faPhone} /> 01797775766</p>
                        <p className='py-2'><FontAwesomeIcon className='px-2' icon={faMailBulk} /> ontirahid@yahoo.com</p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control w-full max-w-lg">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Your Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-lg">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Your Email is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-warning">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-lg">
                                <label className="label">
                                    <span className="label-text font-bold">Description</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Write your message'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-warning">{errors.description.message}</span>}
                                </label>
                            </div>
                            <input className='btn btn-primary w-full max-w-xs text-white font-bold' type="submit" value="Contact" />
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;
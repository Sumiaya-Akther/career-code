import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();
    // console.log(jobId, user);

    const handleApplyForSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(email, linkedIn, github, resume);
        const application = {
            jobId,
            applicant: email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)


            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);

            })
    }


    return (
        <div>
            <h1 className='text-3xl font-bold my-10 text-center'>Apply for Job</h1>
            <form onSubmit={handleApplyForSubmit}>
                <fieldset className=" bg-cyan-500  border-base-300 max-w-3xl mx-auto rounded-box border p-4">
                    <div className='grid grid-cols-1 md:grid-cols-2 justify-between ml-6 gap-5'>
                        <div className='flex flex-col'>
                            <label className="label">User Email</label>
                            <input type="email" name='email' defaultValue={user?.email} readOnly required className="input max-w-full" placeholder="Email linl" />
                        </div>
                        <div className='flex flex-col'>
                            <label className="label">LinkedIn Link</label>
                            <input type="url" name='linkedIn' className="input max-w-full" required placeholder="url..." />
                        </div>
                        <div className='flex flex-col'>
                            <label className="label">Github Link</label>
                            <input type="url" name='github' className="input max-w-full" required placeholder="github profile link.." />
                        </div>
                        <div className='flex flex-col'>
                            <label className="label">Resume</label>
                            <input type="url" name='resume' className="input max-w-full" required placeholder="resume link.." />
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className="btn bg-amber-500 my-8 btn-wide">Apply Now</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;
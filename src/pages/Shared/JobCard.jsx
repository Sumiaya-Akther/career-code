import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, location, jobType, applicationDeadline, company_logo, company,  salaryRange, description, requirements, _id } = job;


    return (
        <div className="card bg-blue-200 text-black p-5 shadow-sm">
            <div className='flex items-center gap-3'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="company_logo" />
                </figure>
                <div>
                    <h3 className="text-2xl font-semibold">{company}</h3>
                    <p className='flex items-center gap-3'><CiLocationOn size={25} /> {location}</p>
                </div>
            </div>
            <div className="card-body space-y-3">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{jobType}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <h4 className='font-semibold text-[18px]'>Salary:
                    {salaryRange.min} -{salaryRange.max} {salaryRange.currency}
                </h4>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
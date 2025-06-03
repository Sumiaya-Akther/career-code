import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { color, motion } from "motion/react";

const JobDetails = () => {
    const job = useLoaderData();
    const { title, location, jobType, applicationDeadline,category, company_logo, company, salaryRange, description, requirements, status, responsibilities, hr_name, hr_email, _id } = job;
    //console.log(job);

    return (
        <div>
            <h1 className="text-3xl font-bold my-10 flex gap-4 justify-center"> Job Details of:<motion.span
                animate={{
                    color: ['#0092b8', '#8a33ff', '#0b5345'],
                    transition: { duration: 4, repeat: Infinity }

                }}
            >{title}</motion.span></h1>
            <div className="max-w-4xl mx-auto mt-10 bg-blue-200 p-8 rounded-2xl shadow-xl space-y-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img
                        src={company_logo}
                        alt={company}
                        className="w-20 h-20 object-contain rounded-xl border shadow-sm"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                        <p className="text-lg text-gray-500">{company}</p>
                    </div>
                </div>

                {/* Job Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-medium">📍 Location:</span> {location}</p>
                    <p><span className="font-medium">💼 Job Type:</span> {jobType}</p>
                    <p><span className="font-medium">📂 Category:</span> {category}</p>
                    <p><span className="font-medium">📅 Deadline:</span> {applicationDeadline}</p>
                    <p><span className="font-medium">💰 Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
                    <p><span className="font-medium">🟢 Status:</span> {status}</p>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">📝 Job Description</h2>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>

                {/* Requirements */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">🧠 Requirements</h2>
                    <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                        {requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                        ))}
                    </ul>
                </div>

                {/* Responsibilities */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">🛠 Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                        {responsibilities.map((res, i) => (
                            <li key={i}>{res}</li>
                        ))}
                    </ul>
                </div>

                {/* HR Info and Apply Button */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t">
                    <div className="text-gray-600">
                        <p><span className="font-medium">👤 HR:</span> {hr_name}</p>
                        <p><span className="font-medium">📧 Email:</span> {hr_email}</p>
                    </div>
                   <Link to={`/jobApply/${_id}`}>
                    <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300">
                        🚀 Apply Now
                    </button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
import React, { use } from 'react';
import JobCard from '../Shared/JobCard';
import { color, motion } from "motion/react";

const HotJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-20"> <motion.span
                animate={{
                    color: ['#0092b8', '#8a33ff', '#0b5345'],
                    transition: { duration: 4, repeat: Infinity }

                }}
            >Hot Jobs </motion.span>
                of the Day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;
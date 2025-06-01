import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    //  const jobsPromise = useLoaderData()

    const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res=>res.json());

    return (
        <div className='my-10'>
            <Banner></Banner>
            <Suspense fallback={'Loading Hot Jobs ...'}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;
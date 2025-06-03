import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hook/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


// const myApplicationsPromise = email =>{
//     return fetch(`http://localhost:3000/applications?email=${email}`).then(res =>res.json())
// }

const MyApplications = () => {
    const {user} = UseAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={`Loading your applications`}>
               <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
           
        </div>
    );
};

export default MyApplications;
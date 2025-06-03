import React, { use } from 'react';
import JobApplicationsRow from './JobApplicationsRow';

const ApplicationList = ({ myApplicationsPromise }) => {

    const applications = use(myApplicationsPromise);

    return (
        <div>
            <h1 className='text-3xl font-bold my-8'>Jobs Applied So Far: {applications.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               No
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationsRow
                                index={index}
                                key={application._id}
                                application={application}
                            ></JobApplicationsRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;
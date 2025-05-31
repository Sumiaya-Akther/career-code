import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-screen p-6 bg-gray-200 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center  px-5 mx-auto my-6">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-6xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <NavLink to="/" rel="noopener noreferrer" className="px-8 py-3 bg-cyan-600 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</NavLink>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
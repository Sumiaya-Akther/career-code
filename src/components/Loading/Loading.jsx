import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            
        </div>
    );
};

export default Loading;
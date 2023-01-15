import React from 'react';
import notFound from '../../assets/404.jpg'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center'>
            <img className='max-w-4xl' src={notFound} alt='Not Found 404'/>
        </div>
    );
};

export default NotFound;
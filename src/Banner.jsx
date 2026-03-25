import React from 'react';
import banner from '../src/assets/banner-main.png'
// import bg from '../src/assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='banner-section py-5 bg-gray-400 my-4 rounded-lg'>
            <div className='p-3 space-y-2'>
                <img className='mx-auto' src={banner} alt="banner image"/>
                <h1 className='text-3xl font-semibold text-white text-center p-3'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h2 className='text-xl font-medium text-gray-200 text-center'>Beyond Boundaries Beyond Limits</h2>
                <div className='flex justify-center pt-3'> 
                    <button className='btn btn-pink mx-auto bg-yellow-300'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
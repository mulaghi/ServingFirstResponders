import React from 'react';

const Hero = ({slogan, sloganMsg}) => {
    return (
        <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img'>
            {/*Overlay*/}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h1 className='text-5xl font-bold'>{slogan}</h1>
                <p className='py-5 text-xl'>{sloganMsg}</p>
                <button className='px-8 py-2 border'>Schedule a Seminar</button>
            </div>
        </div>
    );
    }

    export default Hero;
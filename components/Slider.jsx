'use client';
import React, {useState} from 'react'
import { sliderData } from './sliderData';
import Image from 'next/image';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'; 

const Slider = ({slides}) => {
const [current, setCurrent] = React.useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};

if (!Array.isArray(slides) || slides.length <= 0) {
    return
}
    //Creating the slider for the images given"Lazy Loading images incase wanting to change directory from client
    console.log(sliderData);
    return (
            <div id='Carousel' className='max-w-[1240px] mx-auto'>
                <h1 className='text-2xl font-bold text-center p-4'>Seminar View</h1>
                <div className='relative flex justify-center p-4'>
                {sliderData.map((slide, index) => {
                    return (
                        <div key={index}
                            className={ 
                                index  === current 
                                    ? 'opacity-[1] ease-in duration-1000'
                                    : 'opacity-0'
                            }
                        >
                            <FaArrowCircleLeft 
                                onClick={prevSlide}
                                    className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[10]' 
                                    size={50} 
                            />
                            {index === current && (
                                <Image 
                                    src={slide.image} 
                                    alt='/' 
                                    width='1440' 
                                    height='600' 
                                    objectFit='cover'
                                />
                            )}
                            <FaArrowCircleRight
                                onClick={nextSlide}
                                    className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[10]'
                                    size={50}
                            />
                            </div>
                );
            })}
            </div>
        </div>
    );
};
export default Slider;
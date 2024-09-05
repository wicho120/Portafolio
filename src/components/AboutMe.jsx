import React, { useState, useEffect } from 'react';
import william from "../assets/william.webp"


const AboutMe = (transition) => {

    console.log(transition)
    return (
        <section className={`flex py-12 items-center justify-content text-white h-svh- mb-20 `}>
        <div  className={`flex flex-col items-center justify-content bg-gray-800 w-[20em] h-[35em] container mx-auto px-4 tr rounded-sm sm:flex-row sm:w-[40em] sm:h-[20em] transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`} `}>
            <img src={william} className='object-cover w-[30em] h-[18em] rounded-md sm:mr-3 mt-3'></img>

            <div className='flex flex-col justify-evenly w-full w-[18em] sm:w-[30em] h-[18em]'>
            <h1 className="text-2xl font-bold mb-2 text-center text-green-500">About me</h1>
            <span className='font-mono text-justify text-sm'>Soy William, un desarrollador web full-stack apasionado por crear soluciones innovadoras y eficientes. Me destaco en el diseño de interfaces atractivas y funcionales con React y Tailwind CSS, así como en el desarrollo backend con Node.js y Express. Valoro el trabajo en equipo, el aprendizaje continuo y la excelencia en cada proyecto.</span>
            </div>
        </div>
        </section>
    );
    };

export default AboutMe;
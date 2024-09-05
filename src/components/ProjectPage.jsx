import React, { useState, useEffect } from 'react';
import william from "../assets/william.webp"


const AboutMe = (transition) => {as
    return (
        <section className={`py-12 bg-gray-900 text-white  lg:h-svh md:h-dvh`}>
        <div  className={`flex flex-col items-center container mx-auto px-4 tr transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`}`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Mis servicios</h2>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[60em]"></div>
        </div>
        </section>
    );
};

export default AboutMe;
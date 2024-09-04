import React, { useState, useEffect } from 'react';
import download from "../assets/download.svg"
import cv from "../assets/cv.pdf"

const PresentComponent = (transition) => {

    console.log(transition)
    return (
        <section className={`flex py-12 items-center justify-content bg-gray-900 text-white h-[75svh] mb-20`}>
        <div  className={`flex flex-col items-center justify-content w-[25em] container mx-auto px-4 tr transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`}`}>
            <h1 className="text-3xl font-bold mb-8 text-center text-green-500">Soy William Galvis <br /> Desarrollador Backend <br/></h1>
            <span className='font-bold text-center mb-8'>Soy un profesional en desarrollo de aplicaciones web, este es mi portafolio creado con algunas de las tecnologias que manejo</span>
            <div className='flex justify-evenly w-full'>
                <button
                type="button"
                class="text-white bg-gradient-to-r from-green-500 to-green-700 active:ring-1 active:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 active:ring-green-700">
                    Ver Proyectos 
                </button>
                <button

                type="button"
                class="text-white bg-gradient-to-r from-green-500 to-green-700 active:ring-1 active:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 active:ring-green-700">
                        <a href={cv} download="CV.pdf" className='flex flex-row items-center justify-between '>
                        <img src={download} className='size-[1rem] mr-2'></img>
                        <span>Descargar CV</span>
                    </a>

                </button>
            </div>
        </div>
        </section>
    );
    };

export default PresentComponent;
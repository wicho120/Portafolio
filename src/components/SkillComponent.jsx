import React, { useState, useEffect } from 'react';
import backend from "../assets/backend.png"
import frontend from "../assets/frontend.png"
import database from "../assets/database.png"

const SkillsSection = (transition) => {

    const skillsData = [
        {
        icon: <img src={backend} className="w-8 h-8 text-green-300 mr-3"></img>,
        title: 'Desarrollo Backend',
        description: 'Con mi experiencia he podido llevar a cabo aplicaciones web complejas que requieren la creacion y consumos de API´S asi como su integracion con bases de datos y frontend',
        },
        {
        icon: <img src={frontend} className="w-8 h-8 text-blue-300 mr-3"></img>,
        title: 'Desarollo Frontend',
        description: 'Tengo conocimientos en React y Tailwind, herramientas con las cuales puedo llevar a cabo cualquier diseño prestablecido para cualquier proyecto web',
        },
        {
        icon: <img src={database} className="w-8 h-8 text-green-300 mr-3"></img>,
        title: 'Bases de datos',
        description: 'He diseñado y creado bases de datos en base a las historias de usuario y logica de negocios con motores como MySQL y MongoDB',
        }
    ];
    console.log(transition)
    return (
        <section className={`py-12 bg-gray-900 text-white  lg:h-svh md:h-dvh`}>
        <div  className={`flex flex-col items-center container mx-auto px-4 tr transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`}`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Mis servicios</h2>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[60em]" >
            {skillsData.map((skill, index) => (
                <div className={`skill-card bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center mb-4 justify-center">
                        {skill.icon}
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                    </div>
                    <p className='text-center'>{skill.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

export default SkillsSection;
import React, { useState, useEffect } from 'react';
import william from "../assets/william.webp"
import cinema from "../assets/cinema.svg"
import frontend from "../assets/frontend.png"
import database from "../assets/database.png"

const ProjectPage = (transition) => {

    const [isTouch, setIsTouch] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
        console.log("entre a useEffect")
        if(active){
            const interval = setTimeout(() => {
                console.log("entre a interval", active)         
                if(active){
                    if(isTouch) {
                        setIsTouch(false)
                    }else if(!isTouch){
                        setIsTouch(true)
                    }
                }
            }, 1500)
            return () => clearTimeout(interval)
        }

    }, [setIsTouch, active, isTouch])



    const handleMouseEnter = () => {
        console.log("entre a handle")
        setActive(true)
    }

    const handleMouseLeave = () => {
        console.log("sali de handle")
        setActive(false)
        setIsTouch(false)
    }

    const skillsData = [
        {
        icon: <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={cinema} className={`object-cover rounded-lg  transition-all duration-800 transform hover:scale-105 ${active ? isTouch ? "shadow-xl shadow-red-500" : "shadow-lg shadow-red-500" : ""}`}></img>,
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

    return (
        <section className={`py-12 bg-gray-900 text-white`}>
        <div  className={`flex flex-col items-center justify-center container mx-auto px-4 tr transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`}`}>
            <div  className="flex flex-col gap-8" >
            {skillsData.map((skill, index) => (
                <div className={`flex flex-col w-[20em] skill-card bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow-lg md:flex-row md:w-[80em]`}>
                    <div className="flex flex-items-center w-[150em] justify-center md:h-[25em] md:w-[60em]">
                        {skill.icon}
                    </div>
                    <div className='flex flex-col items-center justify-center ml-5'>
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        <p className='text-center'>{skill.description}</p>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default ProjectPage;
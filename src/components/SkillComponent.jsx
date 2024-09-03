import React, { useState, useEffect } from 'react';

const SkillCard = ({ icon, title, description, isVisible }) => {

    return (
        <div className="skill-card bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow-lg  ">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p>{description}</p>
        </div>
        );
};

const SkillsSection = () => {

    const [isVisible, setIsVisible] = useState(false);
    
    const handleMouseEnter = () => {
        setIsVisible(true);
    }

    const skillsData = [
        {
        icon: <svg className="w-8 h-8 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>,
        title: 'Responsive design',
        description: 'Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de cómo implementarlos de manera efectiva en cualquier proyecto.',
        },
        {
        icon: <svg className="w-8 h-8 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
        title: 'Sistema de diseño',
        description: 'Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.',
        },
        {
            icon: <svg className="w-8 h-8 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>,
            title: 'Responsive design',
            description: 'Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de cómo implementarlos de manera efectiva en cualquier proyecto.',
            },
            {
            icon: <svg className="w-8 h-8 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
            title: 'Sistema de diseño',
            description: 'Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.',
            },
            {
                icon: <svg className="w-8 h-8 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>,
                title: 'Responsive design',
                description: 'Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de cómo implementarlos de manera efectiva en cualquier proyecto.',
                },
                {
                icon: <svg className="w-8 h-8 text-blue-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
                title: 'Sistema de diseño',
                description: 'Tengo manejo de sistemas de diseño, lo cual permite agilidad en el proceso de diseño acortando los tiempos en la creación de las interfaces dentro del proyecto.',
                },
        // ... (agrega los demás datos de tus habilidades aquí)
    ];

    return (
        <section className="py-12 bg-gray-900 text-white">
        <div onMouseEnter={handleMouseEnter} className={`flex flex-col items-center container mx-auto px-4 tr transition-opacity duration-1000 ${isVisible ? `opacity-100` : `opacity-0`}  `}>
            <h2 className="text-3xl font-bold mb-8 text-center">Mis habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[60em] ">
            {skillsData.map((skill, index) => (
                <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} isVisible={isVisible} />
            ))}
            </div>
        </div>
        </section>
    );
    };

export default SkillsSection;
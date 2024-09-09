import React, { useState, useEffect } from 'react';
import william from "../assets/william.webp"
import cinema from "../assets/cinema.svg"
import frontend from "../assets/frontend.png"
import database from "../assets/database.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        icon: <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={cinema} className={`object-cover rounded-lg  transition-all duration-15 00 transform hover:scale-105 ${active ? isTouch ? "shadow-xl shadow-red-500" : "shadow-lg shadow-red-500" : ""}`}></img>,
        },
        {
        icon: <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={cinema} className={`object-cover rounded-lg  transition-all duration-15 00 transform hover:scale-105 ${active ? isTouch ? "shadow-xl shadow-red-500" : "shadow-lg shadow-red-500" : ""}`}></img>,
        },
        {
        icon: <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={cinema} className={`object-cover rounded-lg ${active ? isTouch ? "shadow-xl shadow-red-500" : "shadow-lg shadow-red-500" : ""}`}></img>,
        }
    ];

    return (
        <section className={`py-12 bg-gray-900 text-white`}>
        <div  className={`flex flex-col items-center justify-center container mx-auto px-4 tr transition-opacity duration-1000 ${transition.transition ? `opacity-100` : `opacity-0`}`}>
            <div  className=" gap-8" >
            <div className={`flex flex-col w-[20em] skill-card bg-gradient-to-r from-green-500 to-green-700 p-6 rounded-lg shadow-lg md:flex-row md:w-[80em] transition-all duration-15 00 transform hover:scale-105`}>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                >
                {skillsData.map((skill, index) => (
                <SwiperSlide className='flex items-center justify-center'>
                    <div className="flex flex-items-center w-[150em] justify-center md:h-[25em] md:w-[60em]">
                        {skill.icon}
                    </div>
                </SwiperSlide>
            ))}         
                </Swiper>

            </div>
            </div>
        </div>
        </section>
    );
};

export default ProjectPage;
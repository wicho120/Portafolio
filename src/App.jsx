import React, { useState, useEffect } from 'react';
import NavBarComponent from './components/NavBarComponent';
import SkillComponent from './components/SkillComponent';
import rocket from "./assets/rocket.svg"

const App = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'console.log("Hello, World!");';
  const finalText = "William David Galvis";
  const [chooseText, setChooseText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
    

  useEffect(() => {
      const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
          if(chooseText === 0) {
              setText(fullText.substring(0, currentIndex + 1));
              setCurrentIndex(currentIndex + 1);
          }else{
              setText(finalText.substring(0, currentIndex + 1));
              setCurrentIndex(currentIndex + 1);
          }

      } else if (isDeleting && currentIndex >= 0) {
          if(chooseText === 0) {
              setText(fullText.substring(0, currentIndex - 1));
              setCurrentIndex(currentIndex - 1);
          }else{
              setText(finalText.substring(0, currentIndex - 1));
              setCurrentIndex(currentIndex - 1);
          }
      } else if (currentIndex === -1) {
          setIsDeleting(false);
          if(chooseText === 0) {
              setChooseText(1);
          }else{
              setChooseText(0);
          }
      } else {
          setIsDeleting(true);
      }
      }, 100);

      return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, fullText, finalText, chooseText]);


  const handleMouseEnter = () => {
    setIsVisible(true);
  }

  if(!isVisible){
    return (
      <div className='grid grid-rows-3 items-center justify-center p-4 bg-gray-900 text-white text-5xl font-bold shadow-lg h-svh'>
        <div className=''></div>
        <div  className="row-start-2 flex p-4 bg-gray-900 text-white text-5xl font-bold h-20 ">
          {text} 
          <span className="animate-blink inline-block h-10 w-0.5 bg-white mx-1 opacity-50 "></span>{" "}
        </div>
        <div className='row-span-3 flex items-center justify-center'>
          <img onClick={handleMouseEnter} src={rocket} className='w-20 h-20 '></img>
        </div>
      </div>
    );
  }else{
    return (
      <div>
            <NavBarComponent></NavBarComponent>
            <SkillComponent></SkillComponent>
      </div>
    );
  }
};

export default App;



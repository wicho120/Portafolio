    import React, { useState, useEffect } from "react";

    const TypingComponent = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = 'console.log("Hello, World!");';
    const finalText = "William Galvis";
    const [chooseText, setChooseText] = useState(0);

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

    return (
        <div className="p-4 bg-gray-900 text-white text-xl font-mono shadow-lg">
        {text}
        <span className="animate-blink inline-block h-4 w-0.5 bg-white mx-1 opacity-50"></span>{" "}
        </div>
    );
    };

    export default TypingComponent;

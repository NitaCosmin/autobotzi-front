import React, { useEffect } from 'react';

const Animation = () => {
    useEffect(() => {
        const choiceLabel1 = document.querySelector(".ChoiceLabel1");
        const choiceLabel = document.querySelector(".ChoiceLabel");
        const separatorStyle = document.querySelector(".Separator-STYLE");

        const handleMouseEnter = () => {
            separatorStyle.style.transform = "translateX(-10%)";
            choiceLabel.style.transform = 'scale(0.9)';
            choiceLabel1.style.transform = 'scale(1.1)';
        };

        const handleMouseLeave = () => {
            separatorStyle.style.transform = "none";
            choiceLabel.style.transform = 'none';
            choiceLabel1.style.transform = 'none';
        };

        const handleMouseEnter1 = () => {
            separatorStyle.style.transform = "translateX(10%)";
            choiceLabel1.style.transform = 'scale(0.9)';
            choiceLabel.style.transform = 'scale(1.1)';
        };

        const handleMouseLeave1 = () => {
            separatorStyle.style.transform = "none";
            choiceLabel1.style.transform = 'none';
            choiceLabel.style.transform = 'none';
        };

        choiceLabel1.addEventListener("mouseenter", handleMouseEnter);
        choiceLabel1.addEventListener("mouseleave", handleMouseLeave);
        choiceLabel.addEventListener("mouseenter", handleMouseEnter1);
        choiceLabel.addEventListener("mouseleave", handleMouseLeave1);

        return () => {
            choiceLabel1.removeEventListener("mouseenter", handleMouseEnter);
            choiceLabel1.removeEventListener("mouseleave", handleMouseLeave);
            choiceLabel.removeEventListener("mouseenter", handleMouseEnter1);
            choiceLabel.removeEventListener("mouseleave", handleMouseLeave1);
        };
    }, []);

    return null; // or return any JSX if needed
};

export default Animation;

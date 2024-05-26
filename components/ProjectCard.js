// components/ProjectCard.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ title, features, images, link, skills }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="grid md:grid-cols-6 md:gap-4 justify-center"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div
        className="md:col-span-3 filter-none px-4 py-14 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="relative w-full" data-carousel="slide">
      <div className="relative h-80 overflow-hidden rounded-lg md:h-80">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full top-0 left-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateX(${currentIndex === index ? 0 : 100}%)` }}
          >
            <img src={image} className="h-50 w-90% ease-in-out transition-all duration-300 rounded-md filter hover:scale-105 shadow-xl cursor-default" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* <img
          src={image}
          alt={title}
          className="h-auto w-md ease-in-out transition-all duration-300 rounded-md filter grayscale hover:grayscale-0 hover:scale-105 cursor-default"
        /> */}

      <div className="absolute flex mt-4 -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button type="button" className="absolute top-1/2 mt-5 flex items-center justify-center h-full cursor-pointer group focus:outline-none" onClick={goToPreviousSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute right-0 flex text-right cursor-pointer group focus:outline-none" onClick={goToNextSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>




        
      </div>
      <div className="md:col-span-3 row-span-1 text-left px-4 py-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <ul className="list-disc ml-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {feature}
            </li>
          ))}
        </ul>
        <br/>

        
        {skills && (
        <div>
          {skills.map((skill, index) => (
            <span key={index}> <strong>{skill} </strong> &nbsp; </span>
          ))}
        </div>
        )}

        
        <br/>

        {link && (
        <a href={link} target="_blank" rel="noreferrer">
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Visit Project
        </button>
        </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

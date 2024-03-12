// components/ProjectCard.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ title, features, image, link, skills }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="grid sm:grid-cols-5 sm:gap-4 md:gap-4 justify-center"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div
        className="md:col-span-2 filter-none px-4 py-6 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          src={image}
          alt={title}
          className="h-auto w-sm ease-in-out transition-all duration-300 rounded-md cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105"
        />
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
        <a href={link} target="_blank" rel="noreferrer">
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Visit Project
        </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceCard = ({ companyName, position, duration, responsibilities }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-auto my-4 w-full max-w-md lg:max-w-full" data-aos="fade-left">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{position}</div>
        <p className="text-gray-900 text-xl mb-2">{companyName}</p>
        <p className="text-gray-900 text-lg mb-4">{duration}</p>
        <ul className="list-disc ml-6">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-900 mb-2">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;

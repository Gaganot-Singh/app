// pages/index.js

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/experienceCard";

const projects = [
  {
    title: "Google Authentication App with Automated Welcome Email Integration",
    features: [
      "Implemented Google OAuth2 for secure and simplified user sign-in using Google accounts.",
      "Automated welcome emails sent upon successful user authentication to enhance user engagement.",
      "Utilized JWT (JSON Web Tokens) for managing secure and stateless authentication sessions.",
      "Developed RESTful API endpoints with Node.js and Express.js, handling authentication flows and user data interactions.",
      "Integrated Nodemailer with Gmail SMTP for sending emails, demonstrating email service configuration and management.",
      "Frontend development with React.js and Next.js, hosted on Vercel for a responsive user interface.",
      "Backend hosted on Render, showcasing skills in deploying and managing backend services in a production environment.",
      "Focused on security best practices, including detailed error handling and secure session management.",
      "Aimed to enhance skills in authentication, backend development, and integration of third-party services."
  ],
    image: "./googleAuthProject.png",
    link: "https://google-authentication-project-frontend.vercel.app/",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Nodemailer",
      "JWT (jsonwebtoken)",
      "MongoDB Atlas",
      "Passport.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vercel",
      "Render",
      "passport-google-oauth20",
      "jsonwebtoken",
      "nodemailer",
      "mongoose",
      "dotenv",
      "cors",
      "morgan",
      "express-session",
      "bcryptjs"
  ]
  },
  {
    title: "Web Portfolio with Next.js and Tailwind CSS",
    features: [
      'Responsive portfolio web application using Next.js and Tailwind CSS',
      'Organized and visually appealing layout',
      'Smooth animations using AOS library',
      'Unique layout with fixed header on left-hand side and movable right portion',
    ],
    image: "./portfolio.png",
    link: "https://github.com/Gaganot-Singh/app",
    skills: ["Next.js", "Tailwind CSS", "AOS Library", "Responsive Design", "UI/UX Design"]
    },
    {
      title: "TOY STORE",
      features: [
        "Incorporated EJS template engine for rendering data from Postgres database",
        "Integrated random quote feature from 'Quotable' API",
        "Implemented partial views for common HTML elements like navbar",
        "Rendered data sets using EJS, including a table for displaying toys data from Postgres",
        "Added functionality for creating, updating, and deleting toys",
        "Integrated user account management using MongoDB Atlas for authentication and sessions",
        "Implemented login history tracking for user logins",
        "Utilized Tailwind CSS framework with DaisyUI plugin for responsive and aesthetically pleasing UI design"
      ],
      image: "./toystore.png",
      link: "https://toy-store-49to.onrender.com/",
      skills: [
      "Node.js",
      "Express.js",
      "EJS",
      "PostgreSQL",
      "Sequelize",
      "MongoDB Atlas",
      "bcryptjs",
      "Client-sessions",
      "HTML",
      "CSS",
      "JavaScript",
      "Login History Tracking",
      "Tailwind CSS",
      "DaisyUI"
      ]
      }
      ,
  {
    title: "MOVIE SEARCH API",
    features: [
      "Movie search API developed using Express.js with Redis cache integration.",
      "Endpoints for searching movies by text, sorting by popularity, release date, or votes.",
      "Seamless online and offline functionality with Redis caching.",
      "Improved user experience by serving cached data and Reduced reliance on external APIs.",
    ],
    image: "./movieapi.png",
    link: "https://github.com/Gaganot-Singh/api-movie-app",
    skills:  ["JavaScript (Node.js)", "Express", "Redis Client", "Axios", "Redis caching mechanism"]
  },
  {
    title: "Student and Course Management System",
    features: [
      "Web application for managing students and courses developed.",
      "Implemented functionalities for adding courses and managing students.",
      "Utilized Sequelize with PostgreSQL for database management.",
      "Integrated HTML forms with validation for adding courses and students.",
      "Designed user-friendly UI using HTML, CSS, and JavaScript."
    ],
    image: "./enrollment.png",
    link: "https://enrollment-system-qe6k.onrender.com/",
    skills: [
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }
  
  
];

const HomePage = () => {
  return (
      <div className="grid w-80% lg:mt-60">
      <div className="mx-2 justify-center items-center" >
       <h1 className="mb-4 text-4xl font-bold text-center">
        About Me
       </h1>
       <br />
       <img
          src="./intro.png"
          alt="Intro Image"
          className="h-32 w-32 mx-auto w-sm ease-in-out transition-all duration-300 rounded-md cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105 cursor-default"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
        <br />
       <p className="ml-2 mr-2 text-justify text-lg font-semibold"
       data-aos="fade-up"
       data-aos-duration="1000">
       Hi there! I am Gaganjot Singh, an enthusiastic full-stack developer currently studying at Seneca Polytechnic in Toronto. I excel in languages like JavaScript, Python and C++, with a focus on creating responsive, user-friendly applications. I have achieved a 4.0 GPA in two consecutive semesters, earning a place on the President&apos;s Honour List twice. With a diverse skill set and hands-on experience in web development, I am passionate about creating responsive, user-friendly applications that drive impactful solutions. Check out my portfolio for more!
       <br/>
       <br/>
       <strong> TECHNICAL SKILLS: </strong>
       </p>
       <br />
       <ul className="list-disc ml-2 mr-2 text-justify text-lg font-semibold"
       data-aos="fade-up"
       data-aos-duration="1000">
        <li> <strong> Languages: </strong> JavaScript (including ES6+), Python, C, C++, HTML, CSS </li>
        <li> <strong> Frameworks/Libraries: </strong> React (including JSX, hooks), Next.js, Node.js, Express.js, Bootstrap, Tailwind CSS </li>
        <li> <strong> Databases: </strong> SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis) </li>
        <li> <strong> Other: </strong> Data visualization tool (Power BI), DevOps (GitHub), Agile methodologies, UI/UX design, Data Structures & Algorithms, Microsoft Office Suite, RESTful APIs, web performance optimization techniques  </li>
       </ul>
       
       
       <br />
       <br />
       </div>



       
       <div className="mx-2 mt-80">
      <h1 className="mb-4 text-4xl font-bold text-center">
        Technical Projects
        </h1>
        {projects.map((project) => (
          <ProjectCard title={project.title} image={project.image}  link={project.link} features={project.features} key={project.title} skills={project.skills} />
        ))}
        <br />
        </div>
        


        <div className="mx-2 mt-80 mb-20">
      <h1 className="mb-4 text-4xl font-bold text-center">
        Experience
        </h1>
        <ExperienceCard
        companyName="Seneca Polytechnic – North York, ON"
        position="Peer Tutor (Part Time)"
        duration="Jan’24 to Present"
        responsibilities={[
          "Conduct one-on-one tutoring sessions for students in various courses, including Web Development (frontend and backend), Data Structures and Algorithms, Software Analysis and Design, JavaScript, Python, C, C++, SQL, MongoDB, Bash Scripting",
        ]}
      />
        <ExperienceCard
        companyName="Seneca Polytechnic – North York, ON"
        position="Supported Learning Groups Leader (Co-op tutor)"
        duration="Aug’23 to Dec,23"
        responsibilities={[
          "Successfully managed and facilitated student learning groups for courses in C++, C, Linux, and JavaScript.",
          "Demonstrated strong communication skills by effectively conveying complex technical concepts in a clear and organized manner.",
          "Assisted students with their Front-end project.",
          "Assisted course instructor with course assessment and logistics."
        ]}
      />
      <ExperienceCard
        companyName="Gumber Metal Works"
        position="Jr. Web Developer (Trainee)"
        duration="Dec’21 to July’22"
        responsibilities={[
          "Collaborated with the development team utilizing React framework to conceptualize and execute a dynamic web catalogue.",
          "Contributed to the implementation of search and filter functionalities, leveraging JSX, components, and layouts to optimize user navigation.",
          "Ensured alignment with company branding guidelines through coordination with the marketing team.",
          "Actively engaged in technical discussions and provided insights on enhancing web catalogue functionality and user experience."
        ]}
      />
      </div> 
      </div>
  );
};

export default HomePage;






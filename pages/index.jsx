// pages/index.js

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/experienceCard";

const projects = [
  {
    title: "Web Portfolio with Next.js and Tailwind CSS",
    description: "Developed a responsive portfolio web application using Next.js and Tailwind CSS. The portfolio showcases various projects, skills, and experiences in an organized and visually appealing manner. Smooth animations were implemented throughout the app using the AOS library, enhancing user experience and engagement.The portfolio features a unique layout with two components: a fixed header on the left-hand side and a movable right portion containing all personal information and project details.",
    image: "./project1.png",
    link: "https://gaganjot-singh.vercel.app/",
    skills: ["Next.js", "Tailwind CSS", "AOS Library", "Responsive Design", "UI/UX Design"]
    },
    {
      title: "TOY STORE",
      description: " Created project by incorporating the EJS template engine to render data from postgres databse. Additionally, integrated a random quote feature from the 'Quotable' API. Implemented partial views for common HTML elements like the navbar. Rendered data sets using EJS and incorporated a table to display toys data fetched from a Postgres database. Added functionality to create, update, and delete Lego sets. Integrated user account management using MongoDB Atlas for user authentication and sessions. Implemented login history functionality to track user logins. Utilized Tailwind CSS framework with the DaisyUI plugin for responsive and aesthetically pleasing UI design.",
      image: "./project1.png",
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
    description: "This project is a movie search API developed using Express.js framework with Redis cache integration. The API provides various endpoints to search for movies by text, sort results by popularity, release date, or votes, and retrieve detailed information about a movie by its ID. The project is designed to function seamlessly both online and offline, with a caching mechanism implemented using Redis to store detailed responses from The Movie Database (MovieDB). This allows the API to serve cached data when offline, enhancing user experience and reducing reliance on external APIs.",
    image: "./project2.png",
    link: "https://github.com/Gaganot-Singh/api-movie-app",
    skills:  ["JavaScript (Node.js)", "Express", "Redis Client", "Axios", "Redis caching mechanism"]
  },
  {
    title: "Student and Course Management System",
    description: "Developed a web application for managing students and courses. Implemented functionalities to add courses, add students to each course, and remove students from courses. Utilized Sequelize for database management with PostgreSQL. Integrated HTML forms for adding courses and students with validation. Designed the UI using HTML, CSS, and JavaScript for a user-friendly experience.",
    image: "./project2.png",
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
          className="h-32 w-32 mx-auto w-sm ease-in-out transition-all duration-300 rounded-md cursor-pointer filter grayscale hover:grayscale-0 hover:scale-105 "
          data-aos="fade-up"
          data-aos-duration="2000"
        />
        <br />
       <p className="ml-2 mr-2 text-justify text-base font-semibold"
       data-aos="fade-up"
       data-aos-duration="1000">
       Hey there! I am Gaganjot Singh, an enthusiastic full-stack developer currently honing my skills at Seneca Polytechnic. As a dedicated student pursuing Computer Programming and Analysis, I have immersed myself in the dynamic realm of coding and technology. My commitment to innovation shines through my proactive engagement in various projects and coursework. In my academic journey at Seneca, Toronto, pursuing Computer Programming and Analysis, I have consistently excelled, earning a place on the President&apos;s Honour List in both semester 1 and semester 3. I am currently honing my skills through practical application in real-world projects and coursework. With a diverse skill set encompassing languages like C++, JavaScript, and Python, coupled with hands-on experience in web development, I am passionate about creating responsive, user-friendly applications that drive impactful solutions. Whether it is crafting sleek front-end designs or optimizing back-end functionality, I thrive on tackling challenges and turning ideas into reality.  If you are looking for a dedicated and versatile developer with ambition, I invite you to explore my portfolio and discover the projects that showcase my commitment to the world of programming.
       <br/>
       <br/>
       <strong> SKILLS: </strong> Excel, PowerPoint, Data Entry, SQL, Python, C, C++, HTML, CSS, JavaScript, Git, Bootstrap, Tailwind CSS, React Next JS, MongoDb
       </p>
       
       <br />
       <br />
       </div>



       
       <div className="mx-2 mt-80">
      <h1 className="mb-4 text-4xl font-bold text-center">
        Technical Projects
        </h1>
        {projects.map((project) => (
          <ProjectCard title={project.title} image={project.image}  link={project.link} description={project.description} key={project.title} skills={project.skills} />
        ))}
        <br />
        </div>
        


        <div className="mx-2 mt-80 mb-20">
      <h1 className="mb-4 text-4xl font-bold text-center">
        Experience
        </h1>
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
        position="IT coordinator (Trainee)"
        duration="Dec’21 to July’22"
        responsibilities={[
          "Collaborated with the development team to gather requirements and create a comprehensive plan for the web catalogue.",
          "Assisted in the implementation of search and filter functionality to enhance user experience and ease of navigation.",
          "Coordinated with the marketing team to ensure the web catalogue aligned with the company's branding guidelines.",
          "Actively participated in meetings and discussions to provide insights and suggestions for improving the web catalogue's functionality and user experience."
        ]}
      />
      </div> 
      </div>
  );
};

export default HomePage;

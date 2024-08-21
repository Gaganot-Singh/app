// pages/index.js

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/experienceCard";
import HighlightedText from "@/components/HighlightedText";
import ScrollProgress from "@/components/ScrollProgress";

const projects = [
  {
    title: "Fragments Microservice",
    features: [
      "Developed a microservice-based project utilizing AWS S3 for object storage and DynamoDB for metadata management.",
      "Implemented Docker and Docker Compose to create a Mock AWS environment using LocalStack for local development.",
      "Designed and developed in-memory databases for testing purposes, facilitating efficient data handling.",
      "Managed configuration settings via environment variables using .env files.",
      "Implemented CRUD operations and deployed the microservice using AWS ECS.",
      "Created comprehensive integration tests using Hurl to validate the microservice's functionality.",
    ],
    images: ["./fragments.png"],
    link: "https://github.com/Gaganot-Singh/fragments",
    skills: [
      "Node.js",
      "Express.js",
      "AWS S3",
      "AWS DynamoDB",
      "Docker",
      "Docker Compose",
      "LocalStack",
      "Environment Variables (.env)",
      "GitHub Actions",
      "Hurl Testing",
      "ECS",
    ]
  },
  {
    title: "Fragments UI",
    features: [
      "Developed a user interface for interacting with the Fragments microservice API using vanilla JavaScript, HTML, and CSS.",
      "Implemented features such as creating, viewing, editing, and deleting fragments.",
      "Enabled drag-and-drop file upload and content type conversion for fragments.",
      "Integrated AWS Cognito for user authentication and secure access to the microservice.",
      "Handled asynchronous API calls and state management for dynamic UI updates.",
      "Designed and implemented event handling for user actions like fragment creation and deletion.",
    ],
    images: ["./fragmentsui.png"],
    link: "https://github.com/Gaganot-Singh/fragments-ui",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "AWS Cognito",
      "Asynchronous API Calls",
      "Drag-and-Drop",
      "Event Handling",
      "UI/UX Design",
      "Git",
    ]
  },
  {
    title: "Airbnb Listings Clone",
    features: [
      "Frontend development using React and Next.js",
      "Constructed UI for a Listings API",
      "Implemented components such as navbar and page headers",
      "Developed listing cards and listing details",
      "Added pagination for navigating listings",
      "Implemented loading cards during data fetch"
    ],
    images: ["./bnb1.png", "./bnb2.png"],
    link: "https://airbnb-listings-clone.vercel.app/",
    skills: [
        "React",
        "Next.js",
        "UI",
        "API",
        "Components",
        "Pagination",
        "Git",
        "Vercel",
        "Frontend"
    ]
  },
  {
    title: "Met Artwork Application with User Authentication and Data Persistence",
    features: [
      "User registration and login with JWT authentication",
      "Search and view artwork from the Metropolitan Museum of Art Collection API",
      "Add and manage favorite artworks",
      "View and manage search history",
      "Backend: Node.js/Express.js API",
      "Persist user data in MongoDB Atlas",
      "Route guarding for secure access to user data"
    ],
    images: ["./mus1.png", "./mus2.png", "./mus3.png","./mus4.png","./mus5.png"],
    link: "https://museum-app.vercel.app/",
    skills: [
      "bcryptjs",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "passport-jwt",
      "Responsive",
      "third-party API integration",
      "Jotai",
      "SWR",
      "React Bootstrap",
      "dotenv",
      "ErrorHandling",
      "Git"
    ]
  },
  {
    title: "Google Authentication App with Automated Welcome Email Integration",
    features: [
      "Google OAuth2 for secure sign-in",
      "Automated welcome emails",
      "JWT for authentication",
      "RESTful API with Node.js/Express.js",
      "Nodemailer for email (Gmail SMTP)",
      "Frontend: React.js/Next.js on Vercel",
      "Backend hosted on Render",
      "Emphasized security",
      "Focus: authentication, backend, third-party integration"
    ],
    images: ["./googleAuthProject.png", "./auth2.png", "./auth3.png" ],
    link: "https://google-authentication-project-frontend.vercel.app/",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js",
      "Nodemailer",
      "JWT (jsonwebtoken)",
      "MongoDB Atlas",
      "Passport.js",
      "Tailwind CSS",
      "passport-google-oauth20",
      "mongoose",
      "dotenv",
      "cors"
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
    images: ["./portfolio.png" ],
    link: "https://github.com/Gaganot-Singh/app",
    skills: ["Next.js", "Tailwind CSS", "AOS Library", "Responsive Design", "UI/UX Design", "Rough Notation", "Framer Motion"]
  },
  {
    title: "TOY STORE",
    features: [
      "Used EJS for rendering data from Postgres",
      "Integrated 'Quotable' API for random quotes",
      "Implemented partial views for navbar",
      "Rendered data sets and tables using EJS",
      "CRUD functionality for toys data",
      "User account management with MongoDB Atlas",
      "Login history tracking",
      "Responsive UI design with Tailwind CSS and DaisyUI"
    ],
    images: ["./toy2.png", "./toy3.png","./toy1.png","./toy4.png","./toy5.png","./toy6.png"],
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
  },
  {
    title: "MOVIE SEARCH API",
    features: [
      "Movie search API developed using Express.js with Redis cache integration.",
      "Endpoints for searching movies by text, sorting by popularity, release date, or votes.",
      "Seamless online and offline functionality with Redis caching.",
      "Improved user experience by serving cached data and Reduced reliance on external APIs.",
    ],
    images: ["./movieapi.png"],
    link: "https://github.com/Gaganot-Singh/api-movie-app",
    skills: ["JavaScript (Node.js)", "Express", "Redis Client", "Axios", "Redis caching mechanism"]
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
    images: ["./enrollment2.png", "./enrollment3.png", "./enrollment.png", "./enrollment1.png"],
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
      <div className="grid w-70% lg:mt-20 ml-10">
      <div className="mx-2 justify-center items-center" >
      <ScrollProgress />
       <h1 className="mb-4 text-4xl font-bold text-center" id="about">
        ABOUT ME
       </h1>
       <div className="h-32 overflow-hidden">
          <img
            src="./helloworld-programming.gif"
            alt="Intro Image"
            className="h-40 object-cover object-center mx-auto my-auto hover:scale-110 cursor-default"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-[70%]">
            <p className="ml-2 mr-2 text-justify text-lg font-semibold" data-aos="fade-up" data-aos-duration="1000">
              Hi there! I am <HighlightedText type="box" color="#ff6347">Gaganjot Singh</HighlightedText>, an ambitious and detail-oriented IT professional currently pursuing Computer Programming and Analysis at Seneca Polytechnic in Toronto, where I have maintained a <HighlightedText type="highlight" color="#6AC5FA">4.0 GPA</HighlightedText> and been honored with the President’s Honour List three times. With a strong foundation in software development and a keen interest in hardware and infrastructure technologies, I excel in languages like <HighlightedText type="highlight" color="#FF7900">JavaScript</HighlightedText>, <HighlightedText type="highlight" color="#FF7900">Python</HighlightedText>, <HighlightedText type="highlight" color="#FF7900">Java</HighlightedText>, and <HighlightedText type="highlight" color="#FF7900">C++</HighlightedText>, and I specialize in building scalable, high-quality applications. My technical expertise spans across <HighlightedText type="underline" color="red">full-stack development </HighlightedText>, <HighlightedText type="underline" color="red">cloud services</HighlightedText>, <HighlightedText type="underline" color="red">DevOps</HighlightedText>, and <HighlightedText type="underline" color="red">UI/UX design</HighlightedText>. With hands-on project experience and a passion for creating dynamic and user-friendly solutions, I am eager to bring value to a dynamic team environment. Feel free to check out my portfolio to see my work in action!
            </p>
          </div>

          <div className="w-full md:w-[30%] flex flex-col items-center mt-4 md:mt-0">
            <div>
              <img
                src="./intro.png"
                alt="Intro Image"
                className="h-36 w-36 object-cover hover:scale-110 cursor-default"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </div>
            <img src="./scroll-down.gif" alt="scroll gif" className="h-28 w-28 object-cover mt-4"/>
          </div>
        </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <h1 className="mb-4 text-4xl font-bold text-center" id="tech">
       SKILLS:
       </h1>
       
       <br />
       <ul className="list-disc ml-2 mr-2 text-justify text-lg font-semibold"
       data-aos="fade-up"
       data-aos-duration="1000">
        <li> <strong> Languages: </strong> JavaScript (including ES6+), Java, Python, C, C++, HTML, CSS </li>
        <li> <strong> Frameworks/Libraries: </strong> React (including JSX, hooks), Next.js, Node.js, Express.js, Bootstrap, Tailwind CSS, Rough Notation, Framer Motion, Ionic, JavaFX </li>
        <li> <strong> Cloud & DevOps: </strong> AWS (EC2, S3, DynamoDB, ECR, ECS, Cognito, CloudWatch), Docker, Docker Compose, LocalStack, CI/CD (GitHub Actions) </li>
        <li> <strong> Databases: </strong> SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis) </li>
        <li> <strong> Other: </strong> WordPress, Agile methodologies, Jira, UI/UX design, Data Structures & Algorithms, postman, RESTful APIs, Test-Driven Development, Unified Modeling Language (UML), Microsoft Office Suite (Word, Excel, PowerPoint, SharePoint, Teams), web performance optimization techniques, Power BI </li>
       </ul>
       <br/>
       <img
            src="./tech.png"
            alt="tech"
            className="object-cover object-center mx-auto my-auto hover:scale-110 cursor-default"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
       <br />
       <br />
       </div>
       
       <div className="mx-2 mt-80" id="projects">
      <h1 className="mb-4 text-4xl font-bold text-center">
        TECHNICAL PROJECTS
        </h1>
        <br/>
        {projects.map((project) => (
          <ProjectCard title={project.title} images={project.images}  link={project.link} features={project.features} key={project.title} skills={project.skills} />
        ))}
        <br />
        </div>
        


        <div className="mx-2 mt-80 mb-20" id="exp">
      <h1 className="mb-4 text-4xl font-bold text-center">
        EXPERIENCE
        </h1>
        <br/>
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
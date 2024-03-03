// pages/index.js

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/experienceCard";

const projects = [
  {
    title: "Project 1",
    description: "amsdamdm kmlkmasdklmkm aklmklakmlkamdlka sals,d,sdl,sld,sd,dmvlkenwjdncjwn nwlvnwlnvwnfkvnwlkvnwjln lwnknvwflknmlkwmfklnwflnclwnvnwknvln wnvklnvwlwmnvlkn wnwnlkfnwkfnlkwvn lwkn wknfklwn wmwlnvklwfnklwnlmfn lwnwklnvklwflnwvlkn ",
    image: "./project1.png",
    link: "https://yourproject.com",
  },
  {
    title: "Projects 2",
    description: "amsdamdm kmlkmasdklmkm aklmklakmlkamdlka sals,d,sdl,sld,sd,dmvlkenwjdncjwn nwlvnwlnvwnfkvnwlkvnwjln lwnknvwflknmlkwmfklnwflnclwnvnwknvln wnvklnvwlwmnvlkn wnwnlkfnwkfnlkwvn lwkn wknfklwn wmwlnvklwfnklwnlmfn lwnwklnvklwflnwvlkn ",
    image: "./project2.png",
    link: "https://yourproject.com",
  },
  {
    title: "Project 3",
    description: "amsdamdm kmlkmasdklmkm aklmklakmlkamdlka sals,d,sdl,sld,sd,dmvlkenwjdncjwn nwlvnwlnvwnfkvnwlkvnwjln lwnknvwflknmlkwmfklnwflnclwnvnwknvln wnvklnvwlwmnvlkn wnwnlkfnwkfnlkwvn lwkn wknfklwn wmwlnvklwfnklwnlmfn lwnwklnvklwflnwvlkn ",
    image: "./project2.png",
    link: "https://yourproject.com",
  }
  
];

const HomePage = () => {
  return (
      <div className="grid w-80% lg:mt-60">
      <div className="mx-2 justify-center items-center" >
       <h1 class="mb-4 text-4xl font-bold text-center">
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
       <p className="ml-2 mr-2 text-justify"
       data-aos="fade-up"
       data-aos-duration="2000">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam iste iure quas, facere repudiandae sed at totam iusto cum consequatur sint. Reiciendis nostrum delectus consequatur eius aspernatur earum laboriosam illum.Welcome to my portfolio! Here you can Welcome to my portfolio! Here you can Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos ab cupiditate recusandae minima in voluptates sint veniam nisi temporibus praesentium iste ipsum tempore deserunt quis nulla, hic animi dicta! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam pariatur voluptates minima provident dicta deleniti animi, laborum aliquid recusandae necessitatibus consectetur, earum nostrum, corporis voluptatum? Dolor ducimus fugit eum illum.Welcome to my portfolio! Here you canWelcome to my portfolio! Here you canWelcome to my portfolio! Here you canWelcome to my portfolio! Here you can  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laboriosam blanditiis ut, facere expedita reprehenderit nemo molestiae quos commodi dolores architecto nostrum, perferendis ea? Doloribus, itaque? Corrupti eaque esse unde! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium id molestias dolores numquam molestiae ducimus eligendi perferendis iure, magni non saepe sapiente nobis ut rem error odio quam nihil illo.
       </p>
       <br />
       <br />
       </div>



       
       <div className="mx-2 mt-80">
      <h1 class="mb-4 text-4xl font-bold text-center">
        Technical Projects
        </h1>
        {projects.map((project) => (
          <ProjectCard title={project.title}image={project.image}  link={project.link} description={project.description} key={project.title} />
        ))}
        <br />
        </div>
        


        <div className="mx-2 mt-80 mb-40">
      <h1 class="mb-4 text-4xl font-bold text-center">
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

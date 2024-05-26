import React from "react";

const Header = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="flex flex-col justify-center items-center h-full lg:fixed max-h-96 m-10">
      <div className="flex items-center justify-center mb-4">
        <a href="https://github.com/Gaganot-Singh" target="_blank" rel="noopener noreferrer">
          <img src="./github-logo.svg" alt="GitHub" className="w-10 h-10 mr-4  hover:scale-110 cursor-default" />
        </a>
        <a href="https://www.linkedin.com/in/gaganjot-singh-07ab15253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY%2BdTNUCGSGa0vS1zRqANlg%3D%3D" target="_blank" rel="noopener noreferrer">
          <img src="./linkedin-logo.svg" alt="LinkedIn" className="w-10 h-10  hover:scale-110 cursor-default" />
        </a>
        <br />
        <br />
      </div>
      <br/>
      <div className="flex items-center justify-center">
      <img
        src="./profile_picture.jpg"
        alt="Profile Picture"
        className="rounded-full w-60 h-60 border-2 border-gray-900"
      />
    </div>
    <br/>
      
      <div className="items-center justify-center"> 
      <h1 className="text-2xl md:text-4xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400"> GAGANJOT SINGH </h1>
      <br/>
      <b>
      <p className="text-center"> Full Stack Developer </p>
      </b>
      <br/>
      <br/>
      </div>
      
      
      
      <div className="mb-2 grid grid-cols-2">
        <div>
        <a href="mailto:jotgumber2002@gmail.com" target="_blank">
        <button type="button" className="px-7 py-4 text-base font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
          Email Me  
        </button>
        </a>
        </div> 
        <div>
        <a href="./GaganjotSingh_Resume.pdf" target="_blank">
          <button className="inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Download Resume
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default Header;

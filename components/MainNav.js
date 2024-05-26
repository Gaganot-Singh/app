import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';


export default function MainNav() {
    return (
      <>
     <header className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-10">
    <nav className="nav fixed font-semibold text-lg w-full fixed">
        <ul className="flex items-center justify-center w-full">
            <li className="p-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <a href="#about"><Button className='px-2 py-2'> ABOUT </Button></a>
            </li>
            <li className="p-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#projects"><Button className='px-2 py-2'> PROJECTS </Button></a>
            </li>
            <li className="p-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#exp"> <Button className='px-2 py-2'> EXPERIENCE </Button></a>
            </li>
        </ul>
    </nav>
</header>

      </>
    );
  }
  



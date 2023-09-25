import React from 'react'
import Navbar from '../navbar/Navbar';
import './header.css';

function header() {
  return (
    <div className="header flex flex-column" id="header">
      <Navbar />
      <div className="container flex w-100">
        <div className="header-content">
          <h1 className="text-white fw-6 header-title">
            Hello, I'm 
            <span className="text-brown"> Basir Elham </span> a Full-stack Web Developer
            Living in <br /> Kabul, Afghanistan
          </h1>
          <p className="text-light fs-2">With a passion for pair programming and real-world projects, <br/> enrolled at Microverse, skilled in React Redux, JavaScript, Ruby and Ruby on Rails</p>
          <ul className='list'>
            <li><a href='#contact' className='btn bg-brown btn-lg text-light fw-bold p-3'>CONTACT ME</a></li>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default header
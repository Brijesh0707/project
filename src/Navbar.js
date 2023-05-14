import React from 'react'
import './App.css'
import Logo from './exam-photo/logo.png';
import Search from './exam-photo/search-icon.png'
import Menu1 from './exam-photo/menu1.png'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={Logo} id="logo2" />
   <div id="drop1">
    <select name='courses' id="select">
        <option className='courses'>Courses</option>
    </select>
   </div>
   <div id="drop2">
    <select name='Program' id="select">
        <option className='Programs'>Programs</option>
    </select>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={Menu1} id="logo3" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <img src={Search} id="search" />
        </li>
        <li className="nav-item">
          <a className="nav-link ">Log in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " id="btn1">JOIN NOW</a>
        </li>
        <li className="nav-item">
        <div id="drop3">
         <select name='courses' id="select">
        <option className='courses'>Courses</option>
        </select>
         </div>
        
        </li>
        <li className="nav-item">
        <div id="drop4">
    <select name='Program' id="select">
        <option className='Programs'>Programs</option>
    </select>
   </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
import React from 'react'
import './App.css'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  )
}

export default App
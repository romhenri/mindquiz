import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from './Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <h1><span>Mind</span>Quiz</h1>
      
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="quiz">Quizzes</NavLink>
      <NavLink to="about">About</NavLink>
      {/* <NavLink to="singup">
        <Button text="Registre-se"/>
      </NavLink> */}
      </div>

      
    </nav>
  )
}

export default Navbar
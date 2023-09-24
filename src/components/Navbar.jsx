import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from './Button'
import styles from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <h1><span>Mind</span>Quiz</h1>
      
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="quiz">Quizzes</NavLink>
        <NavLink to="about">About</NavLink>
        {/* <NavLink to="singup">
          <Button text="Registre-se"/>
        </NavLink> */}
      </nav>

    </div>
  )
}

export default Navbar
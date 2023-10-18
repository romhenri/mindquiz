import React from 'react'
import error from '../assets/404-error.svg';
import { useNavigate } from 'react-router-dom'
import '../css/Pages.css'

const ErrorPage = () => {
  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
  }

  return (
    <main>
      <section className='error-section'>
        <div className='container'>
          <div>
            <img src={error} alt="" />
            <div className="buttonsLine">
            <button onClick={returnHome}> Return </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ErrorPage

import React from 'react'
import { Outlet } from 'react-router-dom'
import manThinking from '../assets/man-thinking-bro.svg'

const QuizPage = () => {
  return (
    <main>
      <section className='quizzes'>
        <div className='container'>
          <div>
            <h2>Quizzes:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem reprehenderit ipsa quasi dignissimos excepturi fugit. Eaque, beatae harum aspernatur quisquam illo laboriosam repellat eligendi ea excepturi expedita omnis! Sed!</p>
          </div>
          <div>
            <img src={manThinking} alt="" />
          </div>
        </div>
      </section>

      <Outlet/>
    </main>
  )
}

export default QuizPage

import React from 'react'
import { Outlet } from 'react-router-dom'

const QuizPage = () => {
  return (
    <main>
      <section className='welcome'>
        <div className='container'>
          <div>
            
          </div>
          <div>
            <h2>Quizzes:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem reprehenderit ipsa quasi dignissimos excepturi fugit. Eaque, beatae harum aspernatur quisquam illo laboriosam repellat eligendi ea excepturi expedita omnis! Sed!</p>
          </div>
        </div>
      </section>

      <Outlet/>
    </main>
  )
}

export default QuizPage

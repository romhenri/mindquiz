import React from 'react'
import womanThinking from '../assets/woman-thinking-bro.png';
import '../css/Pages.css'

const HomePage = () => {
  return (
    <main>
      <section className='welcome'>
        <div className='container'>
          <div>
            <img src={womanThinking} alt="" />
          </div>
          <div>
            <h2>Welcome!</h2>
            <p>MindQuiz - where knowledge meets fun! Explore a world of diverse quizzes, challenge friends, and expand your horizons, all while having a great time. Join us on this exciting journey of learning and entertainment. Welcome to MindQuiz!</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

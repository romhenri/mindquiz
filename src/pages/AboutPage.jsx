import React from 'react'
import womanThinking from '../assets/woman-thinking-bro.png';
import '../css/Pages.css'

const AboutPage = () => {
  return (
    <main className='about-page'> 
          <section>
            <div> 
              <h2>About</h2>

              <p>MindQuiz is your destination for engaging quizzes that cover a wide range of topics. Test your knowledge, challenge your friends, and have fun along the way. Whether you're a trivia pro or just looking for a good time, MindQuiz has quizzes that suit all levels. Join us in the world of quizzes and see how much you know!.</p>
            </div>
          </section>
          <section>
            <div> 
              <h2>Original Idea</h2>

              <p>MindQuiz originates from an older website created as part of the '50 Projects 50 Days' challenge. On day 46, the objective was a Quiz App about programming.</p>

              <p>
                <a href="https://romhenri.github.io/50projects50days/day-46/" target="_blank" rel="noopener noreferrer">
                Project Day 46: Quiz App
              </a>
              </p>
              <p>
                <a href="https://github.com/romhenri/50projects50days/tree/main/day-46" target="_blank" rel="noopener noreferrer">
                  Quiz App - Source Code
                </a>
              </p>
            </div>
          </section>
        </main>
  )
}

export default AboutPage

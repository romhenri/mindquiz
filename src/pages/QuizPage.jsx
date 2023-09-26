import React from 'react'
import { useNavigate } from 'react-router-dom'
import manThinking from '../assets/man-thinking-bro.png'

const QuizPage = () => {
  const navigate = useNavigate()

  const general1 = () => {
    navigate("/quiz/general1")}
  const general2 = () => {
    navigate("/quiz/general2")}

  return (
    <main className='quizPage'>
      <section className='quizzes'>
        <div className='container'>
          <div>
            <h2>Quizzes:</h2>
            <p>MindQuiz offers a wide array of quizzes for all interests. From challenging trivia to engaging puzzles, there's something for everyone. Whether you're into history, science, or pop culture, we've got quizzes to both entertain and challenge you. Explore a world of topics designed to stimulate your mind. Join us at MindQuiz!</p>
          </div>
          <div>
            <img src={manThinking} alt="" />
          </div>
        </div>
      </section>

        <div className="container">
          <div className="quizCard" onClick={general1}>
            <h3>General 1</h3>
            <p>Easy general knowledge questions.</p>
          </div>

          <div className="quizCard" onClick={general2}>
            <h3>General 2</h3>
            <p>Easy general knowledge questions.</p>
          </div>
        </div>
    </main>
  )
}

export default QuizPage

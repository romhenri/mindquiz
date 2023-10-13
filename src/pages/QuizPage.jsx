import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import manThinking from '../assets/man-thinking-bro.png'

const QuizPage = ({quizzes}) => {
  const navigate = useNavigate()

  function createTags(array) {
    return array.map((item) => (
     <span> {item} </span> 
    ))
  }

  function createQuizzesCards(quizzes) {
    return quizzes.slice(0).map((item, index) => (
      <div key={index} className="quizCard">
        <h3>{quizzes[index][0].title}</h3>
        <p className='desc'>{quizzes[index][0].desc}</p>
        <p className='tags'>
         {createTags(quizzes[index][0].tags)}

          {/* {quizzes[index][0].tags.toString().replace(",", ", ")} */}
        </p>
      </div>
    ));
  }

  useEffect(() => {
    // Navigate to "name"
    const handleQuizCardClick = (name) => {
      navigate(`/quiz/${name}`);
    };

    // Add "EventListener" to all cards
    const quizCards = document.querySelectorAll('.quizCard');
    quizCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        handleQuizCardClick(quizzes[index][0].name);
      });
    });

    // Remove "EventListener" to all cards
    return () => {
      quizCards.forEach((card, index) => {
        card.removeEventListener('click', () => {
          handleQuizCardClick(quizzes[index][0].name);
        });
      });
    };
  }, [quizzes, navigate]);

  return (
    <main className='quizPage'>
      <section className='quizzes'>
        <div className='container'>
          <div>
            <h2>Quizzes:</h2>
            <p>MindQuiz offers a wide array of quizzes for all interests. From challenging trivia to engaging puzzles, there's something for everyone. Whether you're into history, science, or pop culture, we've got quizzes to both entertain and challenge you. Explore a world of topics designed to stimulate your mind. Join us at MindQuiz!</p>
          </div>
          <div>
            <img src={manThinking} alt="Man thinking" />
          </div>
        </div>
      </section>

        <div className="container">
         {createQuizzesCards(quizzes)}
        </div>
    </main>
  )
}

export default QuizPage

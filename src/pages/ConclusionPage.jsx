import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from '../components/Button'
import '../css/Pages.css';

const tryAgain = () => {
  window.location.reload(true);
}

const share = () => {
  console.log(window.location);
  console.log(window.locationbar);

  if (navigator.share) {
    navigator.share({
      url: window.location,
      title: 'MindQuiz - You need to know!'
    })
  }
}

function getAnswerText(array, answer) {
  // console.log(array[1].text);
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === answer) {
      return array[i].text;
    }
  } return null;
}

function getResult(rightAnswer, userAnswer) {
  if (userAnswer === rightAnswer) {
    return 'correct'
  }
  return ;
}

function createAnswerCards(data, answers) {
  return data.slice(1).map((item, index) => (
    <section key={index} className={getResult(item.answer, answers[index + 1])}>
      <h3>{item.id}. {item.question}</h3>
      Answer: {getAnswerText(item.options, item.answer)}
    </section>
  ));
}

const ConclusionPage = ( { data, answers, rate}) => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/quiz");
  };
  const answerCards = createAnswerCards(data, answers);

  return (
    <main className='conclusion-page'>
      <h2>Accuracy {rate}%</h2>

      <hr />

      <div> Your answers: {answers.slice(1).join(', ')}.</div>

      <div>
        Right answers: {data.slice(1).map(item => item.answer).join(', ')}.
      </div>

      <hr />

      <div className='buttonsLine'>
        <button onClick={returnHome}>Return</button>
      </div>
      <div className='buttonsLine' >

        <button onClick={tryAgain} className='alternative'>
          Try again
        </button>

        <button onClick={share} className='alternative'>
          Share
        </button>
      </div>


      <div id='cardsContainer'>
      {answerCards}
      </div>

    </main>
  )
}


export default ConclusionPage

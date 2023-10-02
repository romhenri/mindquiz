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

function createAnswerCardsOld(data, answers) {
  const cards = [];
  for (let i = 1; i < data.length; i++) {
    // console.log(data[i].question);
    const card = document.createElement('div');
    card.className = 'cardAnswer';

    card.innerHTML = `
    <section className={getResult(${data[i].answer}, ${answers[i]}>
      <h3>${data[i].id}. ${data[i].question}</h3>
      Answer: ${getAnswerText(data[1].options, data[1].answer)}
    </section>
    `
    cards.push(card);
  } 
  // return cards
  console.log(cards);
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
      
      <div> Your answers: {answers.slice(1).join(', ')}.</div>

      <div>
        Right answers: {data.slice(1).map(item => item.answer).join(', ')}.
      </div>

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

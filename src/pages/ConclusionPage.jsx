import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Pages.css';

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

const ConclusionPage = ( { data, answers, rate}) => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/quiz");
  };

  return (
    <main className='conclusion-page'>
        <h2>Accuracy {rate}%</h2>
        
        <div>
        </div>

        <div className='buttonsLine'>
          <button onClick={returnHome}>Return</button>
        </div>

        <div>
          <section className={getResult(data[1].answer, answers[1])}>
            <h3>{data[1].id}. {data[1].question}</h3>
            Answer: {getAnswerText(data[1].options, data[1].answer)}
          </section>
          <section className={getResult(data[2].answer, answers[2])}>
            <h3>{data[2].id}. {data[2].question}</h3>
            Answer: {getAnswerText(data[2].options, data[2].answer)}
          </section>
          <section className={getResult(data[3].answer, answers[3])}>
            <h3>{data[3].id}. {data[3].question}</h3>
            Answer: {getAnswerText(data[3].options, data[3].answer)}
          </section>
          <section className={getResult(data[4].answer, answers[4])}>
            <h3>{data[4].id}. {data[4].question}</h3>
            Answer: {getAnswerText(data[4].options, data[4].answer)}
          </section>
          <section className={getResult(data[5].answer, answers[5])}>
            <h3>{data[5].id}. {data[5].question}</h3>
            Answer: {getAnswerText(data[5].options, data[5].answer)}
          </section>
          <section className={getResult(data[6].answer, answers[6])}>
            <h3>{data[6].id}. {data[6].question}</h3>
            Answer: {getAnswerText(data[6].options, data[6].answer)}
          </section>
          <section className={getResult(data[7].answer, answers[7])}>
            <h3>{data[7].id}. {data[7].question}</h3>
            Answer: {getAnswerText(data[7].options, data[7].answer)}
          </section>
          <section className={getResult(data[8].answer, answers[8])}>
            <h3>{data[8].id}. {data[8].question}</h3>
            Answer: {getAnswerText(data[8].options, data[8].answer)}
          </section>
          <section className={getResult(data[9].answer, answers[9])}>
            <h3>{data[9].id}. {data[9].question}</h3>
            Answer: {getAnswerText(data[9].options, data[9].answer)}
          </section>
          <section className={getResult(data[10].answer, answers[10])}>
            <h3>{data[10].id}. {data[10].question}</h3>
            Answer: {getAnswerText(data[10].options, data[10].answer)}
          </section>
        </div>
    </main>
  )
}


export default ConclusionPage

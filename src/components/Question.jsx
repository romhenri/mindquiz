import React, { Component, useNavigate  } from 'react';
import ConclusionPage from '../pages/ConclusionPage.jsx'
import '../css/Quiz.css';
import general1 from './general1.json';
import general2 from './general2.json';
import programming1 from './programming1.json';
import programming2 from './programming2.json';
import javascript1 from './javascript1.json';
import javascript2 from './javascript2.json';
import javascript3 from './javascript3.json';
import python1 from './python1.json';

var score = 0
var numberOfQuestions

class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedOption: null, // Default value
    };
    score = 0

    switch (this.props.data) {
      case 'general1':
        this.dataJSON = general1;
        console.log("Quiz General 2");
        break;
      case 'general2':
        this.dataJSON = general2;
        console.log("Quiz General 2");
        break;
      case 'programming1':
        this.dataJSON = programming1;
        console.log("Programming 1");
        break;
      case 'programming2':
        this.dataJSON = programming2;
        console.log("Programming 2");
        break;
      case 'javascript1':
        this.dataJSON = javascript1;
        console.log("Javascript 1");
        break;
      case 'javascript2':
        this.dataJSON = javascript2;
        console.log("Javascript 2");
        break;
      case 'javascript3':
        this.dataJSON = javascript3;
        console.log("Javascript 3");
        break;
      case 'python1':
        this.dataJSON = python1;
        console.log("Python 1");
        break;
      default:
        console.log("No Found Quiz");
    }

  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleConfirm = () => {
    const selectedValue = this.state.selectedOption;
    const btnConfirm = document.getElementById('btnConfirm');

    if (!selectedValue) {
      btnConfirm.textContent = "Please, choose a option to continue!"
      return
    } else {
      btnConfirm.textContent = "Continue"
    }

    console.log('Selected:', selectedValue);

    const currentQuestion = this.dataJSON[this.state.currentQuestionIndex];
    numberOfQuestions = this.dataJSON.length;

    if (selectedValue == currentQuestion.answer) {
      score++;
      console.log(score);
    }

    // Next question
    this.setState((prevState) => ({
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    selectedOption: '',
  }))
  };

  render() {
    
    const currentQuestion = this.dataJSON[this.state.currentQuestionIndex];

    if (!currentQuestion) {
      var rate = (score / numberOfQuestions) * 100

      if (rate >  90) {
        console.log('green');
      } else if (rate > 80) {
        console.log('dark green');
      } else if (rate > 70) {
        console.log('yellow');
      } else {
        console.log('red');
      }

      // End
      return <ConclusionPage rate={rate}/>
    } 

    return (
      <div className='question'>
        <h3>{currentQuestion.question}</h3>

        <div className="option">
          <input
            type="radio"
            name="Option" 
            id="a"
            value="a"
            tabIndex="0"
            checked={this.state.selectedOption === 'a'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="a">
            {currentQuestion.options[0].text}
          </label>
        </div>

        <div className="option">
          <input
            type="radio"
            name="Option"
            id="b"
            value="b"
            tabIndex="1"
            checked={this.state.selectedOption === 'b'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="b">
            {currentQuestion.options[1].text}
          </label>
        </div>

        <div className="option">
          <input
            type="radio"
            name="Option"
            id="c"
            value="c"
            tabIndex="2"
            checked={this.state.selectedOption === 'c'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="c">
            {currentQuestion.options[2].text}
          </label>
        </div>

        <div className="option">
          <input
            type="radio"
            name="Option"
            id="d"
            value="d"
            tabIndex="3"
            checked={this.state.selectedOption === 'd'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="d">
          {currentQuestion.options[3].text}
          </label>
        </div>

        <div className='buttonsLine'>
         <button id='btnConfirm' onClick={
          this.handleConfirm
          }>
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default RadioForm;

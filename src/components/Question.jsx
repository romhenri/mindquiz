import React, { Component } from 'react';
import ConclusionPage from '../pages/ConclusionPage.jsx'
import Button from './Button.jsx'
import '../css/Quiz.css';
// Data
import general1 from '../data/general1.json';
import general2 from '../data/general2.json';
import general3 from '../data/general3.json';
import history1 from '../data/history1.json';
import programming1 from '../data/programming1.json';
import programming2 from '../data/programming2.json';
import javascript1 from '../data/javascript1.json';
import javascript2 from '../data/javascript2.json';
import javascript3 from '../data/javascript3.json';
import web1 from '../data/web1.json';
import web2 from '../data/web2.json';
import linux1 from '../data/linux1.json';
import python1 from '../data/python1.json';
import canvas1 from '../data/canvas1.json';

var score = 0
var numberOfQuestions

class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 1, // Current Question
      selectedOption: null, // Default value
      answers: [null]
    };
    score = 0

    switch (this.props.data) {
      case 'general1':
        this.dataJSON = general1;
        break;
      case 'general2':
        this.dataJSON = general2;
        break;
      case 'general3':
        this.dataJSON = general3;
        break;
      case 'history1':
        this.dataJSON = history1;
        break;
      case 'programming1':
        this.dataJSON = programming1;
        break;
      case 'programming2':
        this.dataJSON = programming2;
        break;
      case 'javascript1':
        this.dataJSON = javascript1;
        break;
      case 'javascript2':
        this.dataJSON = javascript2;
        break;
      case 'javascript3':
        this.dataJSON = javascript3;
        break;
      case 'web1':
        this.dataJSON = web1;
        break;
      case 'web2':
        this.dataJSON = web2;
        break;
      case 'linux1':
        this.dataJSON = linux1;
        break;
      case 'python1':
        this.dataJSON = python1;
        break;
      case 'canvas1':
        this.dataJSON = canvas1;
        break;
      default:
        console.log("No Found Quiz");
    }

    console.log(this.dataJSON[0].title);

  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });

    document.getElementById('btnConfirm').textContent = "Confirm"
  };

  handleConfirm = () => {
    const selectedValue = this.state.selectedOption;
    
    const btnConfirm = document.getElementById('btnConfirm');

    if (!selectedValue) {
      btnConfirm.textContent = "Please, choose a option to continue!"
      return
    } else {
      btnConfirm.textContent = "Confirm"
      this.state.answers.push(selectedValue);
      console.log(this.state.answers);
    }

    console.log('Selected:', selectedValue);

    const currentQuestion = this.dataJSON[this.state.currentQuestionIndex];
    numberOfQuestions = (this.dataJSON.length)-1;

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

  handleJump = () => {
    document.getElementById('btnConfirm').textContent = "Confirm"
    this.state.answers.push(null);
    console.log(this.state.answers);

    console.log('Selected:', null);

    const currentQuestion = this.dataJSON[this.state.currentQuestionIndex];
    numberOfQuestions = (this.dataJSON.length)-1;

    // Next question
    this.setState((prevState) => ({
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    selectedOption: '',
  }))
  };

  render() {
    const currentQuestion = this.dataJSON[this.state.currentQuestionIndex];

    if (!currentQuestion) {
      var rate = Math.round((score / numberOfQuestions) * 100)

      // End
      return <ConclusionPage 
      data={this.dataJSON} answers={this.state.answers} rate={rate}/>
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

        <div className='buttonsLine'>
          <Button text='Quit' className='alternative' onClick='returnHome'/>

          <button id='btnConfirm' className='alternative' 
          onClick={
            this.handleJump
            }>
            Jump
          </button>
        </div>
      </div>
    );
  }
}

export default RadioForm;

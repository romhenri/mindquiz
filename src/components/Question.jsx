import React, { Component } from 'react';
import ConclusionPage from '../pages/ConclusionPage.jsx'
import Button from './Button.jsx'
import '../css/Quiz.css';

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

    console.log(this.props.data);

    this.dataJSON = this.props.data

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

        {currentQuestion.options[1] && 
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
        </div>}

        {currentQuestion.options[2] &&
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
        </div>}

        {currentQuestion.options[3] && 
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
        </div>}

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

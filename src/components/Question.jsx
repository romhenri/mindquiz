import React, { Component } from 'react';
import '../css/Questions.css';
import general1 from './general1.json';

var score = 0
var numberOfQuestions

class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedOption: null, // Default value
    };
    switch (this.props.data) {
      case 'general1':
        this.dataJSON = general1;
        console.log("sucess");
        break;
      default:
        console.log("fail");
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
      return <div>
        <h2>{rate}%</h2>
      </div>;
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
            checked={this.state.selectedOption === 'd'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="d">
          {currentQuestion.options[3].text}
          </label>
        </div>

        <div className='buttonsLine'>
         <button onClick={
          this.handleConfirm
          }>Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default RadioForm;

import React, { Component } from 'react';
import './Questions.css';
import dataJSON from './test.json';

class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedOption: null, // Default value
    };
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

    // Next question
    this.setState((prevState) => ({
    currentQuestionIndex: prevState.currentQuestionIndex + 1,
    selectedOption: '',
  }))
  };

  render() {
    const currentQuestion = dataJSON[this.state.currentQuestionIndex];

    if (!currentQuestion) {
      // End
      return <div>Todas as perguntas foram respondidas.</div>;
    }

    return (
      <div className='question'>
        <h3>What's Messi's country?</h3>

        <div className="option">
          <input
            type="radio"
            name="Option"
            id="a"
            value="a"
            checked={this.state.selectedOption === 'a'}
            onChange={this.handleOptionChange}
          />
          <label htmlFor="a">Brazil</label>
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
          <label htmlFor="b">Argentina</label>
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
          <label htmlFor="c">Portugal</label>
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
          <label htmlFor="d">Spain</label>
        </div>

        <div className='buttonsLine'>
         <button onClick={this.handleConfirm}>Confirm</button>
        </div>
      </div>
    );
  }
}

export default RadioForm;

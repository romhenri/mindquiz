import React, { Component } from 'react';
import './Questions.css';

class RadioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log('Valor selecionado:', selectedValue);
  };

  render() {
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

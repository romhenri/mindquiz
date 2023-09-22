import React from 'react'
import './Questions.css'

const Question = () => {
  return (
      <div className='question'>
        <h3>What's Messi country?</h3>

        <div className="option">
          <input type="radio" name="Option" id="a" />
          <label htmlFor="a">Brazil</label>
        </div>

        <div className="option">
          <input type="radio" name="Option" id="b" />
          <label htmlFor="b">Argetine</label>
        </div>

        <div className="option">
          <input type="radio" name="Option" id="c" />
          <label htmlFor="c">Portugal</label>
        </div>

        <div className="option">
          <input type="radio" name="Option" id="d" />
          <label htmlFor="d">Spain</label>
        </div>

        <div className='buttonsLine'>
         <button>Confirm</button>
        </div>
      </div>
  )
}

export default Question
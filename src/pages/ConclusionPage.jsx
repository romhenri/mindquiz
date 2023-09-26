import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConclusionPage = ( {rate}) => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/quiz");
  };
  return (
    <div>
        <h2>Accuracy {rate}%</h2>
        <div className='buttonsLine'>
          <button onClick={returnHome}>Retornar</button>
        </div>
    </div>
  )
}

export default ConclusionPage

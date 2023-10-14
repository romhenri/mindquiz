import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/QuizPage.css'

const SearchBar = () => {
  const navigate = useNavigate()

  useEffect(() => {})

  return (
    <section className='config'>
        <p>Filtrar:</p>
        <button>General</button>
        <button>History</button>
        <button>Programming</button>
        <button>Web</button>
        <button>Business</button>
        <button>X</button>
      </section>
  )
}

export default SearchBar
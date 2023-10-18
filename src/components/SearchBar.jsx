import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import '../css/QuizPage.css'
import xmark from '../assets/xmark-svgrepo-com.svg'
import xmarkPNG from '../assets/close.png'

const SearchBar = () => {
  const [general, setGeneral] = useState(-1);
  const [history, setHistory] = useState(-1);
  const [programming, setProgramming] = useState(-1);
  const [web, setWeb] = useState(-1);
  const [business, setBusiness] = useState(-1);

  // Change tags States.
  useEffect(() => {
    const filtersButtons = document.querySelectorAll('.filter');

    // Change tags States.
    const handleQuizCardClick = (tag) => {
      console.log(`Received: ${tag}`);

      switch (tag) {
        case 'general':
          setGeneral(general * -1)
          break
        case 'history':
          setHistory(history * -1)
          break
        case 'programming':
          setProgramming(programming * -1)
          break
        case 'web':
          setWeb(web * -1)
          break
        case 'business':
          setBusiness(business * -1)
          break
      }

      console.group(`The setStates list updated!`);
      console.log(general, history, programming, web, business)
      console.groupEnd();

    };
    // Add "EventListener" to all cards.
    filtersButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        handleQuizCardClick(btn.getAttribute('tag'));
      });
    })
  
  console.log('Effect');
  },)

  // 
  useEffect(() => {
    const quizCards = document.querySelectorAll('.quizCard')

    // Check if some tag of array is active
    function includesOfArray(string, array) {
      for (var i = 0; i < array.length; i++) {
        if (string.includes(array[i])) {
          return true
        }
      }
      return false
    }

    const activeList = [null]

    // Array of active tags
    if (general > 0) {activeList.push('general')}
    if (history > 0) {activeList.push('history')}
    if (programming > 0) {activeList.push('programming')}
    if (web > 0) {activeList.push('web')}
    if (business > 0) {activeList.push('business')}

    if (!activeList[1]) {
      activeList.push('general')
      activeList.push('history')
      activeList.push('programming')
      activeList.push('web')
      activeList.push('business')
    }

    console.log(`activeTagsListArray = ${activeList}`);

    quizCards.forEach((card, index) => {
      let tagsAtr = card.getAttribute('tags')
      card.classList.remove('hidden')

      if (!includesOfArray(tagsAtr, activeList)) {
        card.classList.add('hidden')
      }}
    )

  }, [general, history, programming, web, business])


  function getStatus(tag) {
    if (tag > 0) {
      return 'active'
    }
    return ''
  }

  function clear() {
    setGeneral(-1)
    setHistory(-1)
    setProgramming( -1)
    setWeb(-1)
    setBusiness(-1)
  }

  // Component
  return (
    <section className='config'>
        
      <div>Search with accuracy:</div>

      <div className='filter-div'>
        <p>Filter:</p>
        
        <button className={"filter " + getStatus(general)} tag="general">
          General
        </button>

        <button className={"filter " + getStatus(history)} tag="history">
          History
        </button>

        <button className={"filter " + getStatus(programming)} tag="programming">
          Programming
        </button>

        <button className={"filter " + getStatus(web)} tag="web">
          Web
        </button>

        <button className={"filter " + getStatus(business)} tag="business">
          Business
        </button>

        <div className='clear' onClick={clear}>
          <img src={xmark} alt="" />
        </div>
      </div>
    </section>
  )
}

export default SearchBar
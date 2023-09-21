import React from 'react'
import womanThinking from '../assets/woman-thinking-bro.svg';
import styles from './HomePage.css'

const HomePage = () => {
  return (
    <main>
      <section className='welcome'>
        <div className='container'>
          <div>
            <img src={womanThinking} alt="" />
          </div>
          <div>
            <h2>Seja Bem-vindo!</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem reprehenderit ipsa quasi dignissimos excepturi fugit. Eaque, beatae harum aspernatur quisquam illo laboriosam repellat eligendi ea excepturi expedita omnis! Sed!</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

import React from 'react'
import { Outlet } from 'react-router-dom'
import  Question  from './Question'

const Quiz = ({data}) => {
  return (
    <section>
      <div>
        {data ? data : 'Title'}
      </div>

      <Question />
    </section>
  )
}

export default Quiz
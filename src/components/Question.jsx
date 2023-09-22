import React from 'react'
import { Outlet } from 'react-router-dom'

const Question = ({title}) => {
  return (
    <section>
      <div>{title}</div>
      Question
      <Outlet/>
    </section>
  )
}

export default Question
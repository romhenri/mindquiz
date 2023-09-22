import React from 'react'
import { Outlet } from 'react-router-dom'

const Question = ({title}) => {
  return (
    <section>
      <div>
        {title ? title : 'Title'}
      </div>
      <Outlet/>
    </section>
  )
}

export default Question
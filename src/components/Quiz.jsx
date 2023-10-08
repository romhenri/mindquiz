import React from 'react'
import Question from './Question'

const Quiz = ({data}) => {
  return (
    <section>
      <div>
        {data[0].title ? data[0].title : 'Title'}
      </div>

      <Question data={data}/>
    </section>
  )
}

export default Quiz
import React from 'react'
import '../styles/Box.css'

const Box = ({joke}) => {
  return (
    <div className='Box'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default Box

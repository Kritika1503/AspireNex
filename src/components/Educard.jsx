import React from 'react'
import "../styles/educard.css"
export default function Educard(props) {
  return (
    <div className='educard'>
        <h1 className='glowing-text'>{props.institute}</h1>
        <p>{props.name}</p>
        <hr className='hrule'/>
        <p>{props.marks}</p>
        <p>{props.duration}</p>
    </div>
  )
}

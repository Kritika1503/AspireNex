import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Projcard(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="projcard" data-aos="flip-right">
      <div className="description">
        <div className="explanation">
          <h1>{props.description}</h1>
        </div>
        <div className="duration">
          <p className="duration">{props.duration}</p>
        </div>
      </div>
      <div className="projimg">
        <img src={props.img} alt="projimg" />
        <div className="linkbutton">
          <a href={props.gitlink} target="_blank">
            <button className="git">Github</button>
          </a>
          <a href={props.live} target="_blank">
            <button className="website">Live</button>
          </a>
        </div>
      </div>
    </div>
  )
}

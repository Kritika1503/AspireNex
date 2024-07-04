import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import leetcode from '../assets/leetcode.png'
import gfg from '../assets/gfg.png'
import Github from '../components/Github'
export default function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="experiences">
      <h1 className="heading">Experience</h1>
      <hr />
      <div data-aos="fade-right" className="journey">
        <div className="educard">
          <h1 className="">Innovate</h1>
          <p>
            Company is dedicated to providing cutting-edge internship
            opportunities that empower engineering students to apply their
            theoretical knowledge in real-world scenarios, fostering innovation
            and excellence..
          </p>
          <hr />
          <p>Full Stack Web Developer Intern</p>
          <p>May/2024 - Jul/2024</p>
        </div>
      </div>
      <h1 className="heading">
        Leetcode Profile :
        <a href="https://leetcode.com/u/not_so_cool_user/">Link</a>
      </h1>
      <hr />
      <img
        data-aos="fade-right"
        className="ques"
        src={leetcode}
        alt="leetcode"
      />
      <h1 className="heading">
        GeeksForGeeks Profile :
        <a href="https://www.geeksforgeeks.org/user/kritikajlbep/">Link</a>
      </h1>
      <hr />
      <img data-aos="fade-right" className="ques" src={gfg} alt="gfg" />

      <h1 className="heading">
        Github Profile :<a href="https://github.com/Kritika-Jain-kj">Link</a>
      </h1>
      <hr />
      <div data-aos="fade-right" className="github">
        <Github />
      </div>
    </div>
  )
}

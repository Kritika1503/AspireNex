import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Educard from './Educard'
import profilepic from '../assets/profile.jpg'

import { FaCode } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { BiLogoReact } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoNodejs } from 'react-icons/bi'
import { BiLogoMongodb } from 'react-icons/bi'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiExpress } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="about">
      <h1 className="heading animation">About Me</h1>
      <hr className="hrule"></hr>
      <img className="img" src={profilepic} alt="profilepic" />
      <div className="aboutcontainer animation" data-aos="fade-right">
        Hello there! I'm a caffeine-fueled, code-crunching wizard currently on a
        mission to conquer the ever-mysterious realm of Computer Science.
        <br />
        I fancy myself as a coder extraordinaire, fluent in the languages of C
        and C++. They say I've even been known to have meaningful conversations
        with compilers – but that's just a rumor.
        <br />
        When I'm not debugging the problems, you'll find me diving into the
        world of web development. Its like my morning coffee - essential, and I
        like my JavaScript served with a side of React, Express js, Node.js, and
        MongoDB. I might not have superpowers, but I can definitely create super
        websites!
        <br />
        So, whether you're looking for a laugh, a coding buddy, or someone to
        share the latest JavaScript meme, I'm your go-to person. Let's make the
        digital world a better place, one funny comment and bug fix at a time.
        Cheers to code, caffeine, and a sprinkle of chaos!"
      </div>

      <h1 className="heading">Skills</h1>
      <hr className="hrule"></hr>

      <div className="skills" data-aos="fade-right">
        <div className="skill" data-aos="fade-right">
          <FaCode size="2rem" color="#0078d7" />
          <p className="skillname">C/C++</p>
        </div>
        <div className="skill">
          <AiFillHtml5 size="2rem" color="#E34C26" />
          <p className="skillname">HTML</p>
        </div>
        <div className="skill">
          <FaCss3Alt size="2rem" color="264de4" />
          <p className="skillname">CSS</p>
        </div>
        <div className="skill">
          <DiJavascript size="2rem" color="yellow" />
          <p className="skillname">JS</p>
        </div>
        <div className="skill">
          <BiLogoReact size="2rem" color="#61dbfb" />
          <p className="skillname">React</p>
        </div>
        <div className="skill">
          <FaCode size="2rem" color="#0078d7" />
          <p className="skillname">DSA</p>
        </div>
        <div className="skill">
          <AiFillGithub size="2rem" color="green" />
          <p className="skillname">Git/Github</p>
        </div>
        <div className="skill">
          <SiExpress size="2rem" color="white" />
          <p className="skillname">Express Js</p>
        </div>

        <div className="skill">
          <BiLogoNodejs size="2rem" color="#68A063" />
          <p className="skillname">Node Js</p>
        </div>
        <div className="skill">
          <BiLogoMongodb size="2rem" color="#4db33d" />
          <p className="skillname">Mongodb</p>
        </div>
        <div className="skill">
          <AiOutlineConsoleSql size="2rem" color="skyblue" />
          <p className="skillname">SQL</p>
        </div>
      </div>

      <h1 className="heading">Education</h1>
      <hr className="hrule" />
      <div className="journey" data-aos="fade-right">
        <Educard
          data-aos="flip-right"
          institute="Undergraduate College"
          name="Birla Institute of Technology, Mesra"
          marks="CGPA: 8.72"
          duration="2021-2025"
          className="first"
        />

        <Educard
          data-aos="flip-right"
          institute="Senior High School"
          name="Delhi Public School, Ranchi"
          marks="Percentage: 96%"
          duration="2019-2021"
          className="first"
        />

        <Educard
          data-aos="flip-right"
          institute="High School"
          name="ST. Thomas School"
          marks="Percentage: 96%"
          duration="2019"
          className="first"
        />
      </div>
    </div>
  )
}

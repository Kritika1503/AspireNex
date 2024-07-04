import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Projcard from './Projcard'
import url from '../assets/url-short.png'
import meme_generator from '../assets/meme_generator.png'
import job_portal from '../assets/job_portal.png'
import book from '../assets/book-listing.png'
import leads from '../assets/leads_tracker.png'
import shopping from '../assets/e-commerce.png'
import music from '../assets/sereneSonics.png'
import game from '../assets/rock-paper.png'
import blog from '../assets/blogpict.png'

export default function Project() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="project">
      <h1 className="heading">Projects</h1>
      <hr className="hrule" />
      <div className="projcards">
        <Projcard
          description="Job Portal"
          img={job_portal}
          duration="A user-friendly web application designed to write beautiful blogs and view other's blogs as well and add comments on them only when you aur logged in."
          gitlink="https://github.com/Kritika-Jain-kj/Job-Portal"
          live="https://job-portal-webapplication.netlify.app/"
        />
        <Projcard
          description="Blogify"
          img={blog}
          duration="A user-friendly web application designed to facilitate the job search process forjob seekers and streamline
recruitment for employers."
          gitlink="https://github.com/Kritika-Jain-kj/Blogify"
        />
        <Projcard
          description="URL Shortener"
          img={url}
          duration="An interactive web application to shorten long urls.It also gives analytics about how many times the url was clicked. It also has sign-up and sign-in pages where individual users can store their respective short urls safely without the access of others."
          gitlink="https://github.com/Kritika-Jain-kj/URL-Shortener"
        />
        <Projcard
          description="Meme Generator"
          img={meme_generator}
          duration="A user-friendly web application designed to generate by editing and download memes and share them using fetch API written in React JS."
          gitlink="https://github.com/Kritika-Jain-kj/Meme-Generator-using-API-in-React"
          live="https://meme-generator-using-api-in-react.vercel.app/"
        />
        <Projcard
          description="Book Listing App"
          img={book}
          duration="A user-friendly web application designed to list book by using Firebase."
          gitlink="https://github.com/Kritika-Jain-kj/Book-Listing-App-using-Firebase-in-React"
          live="https://book-listing-app-using-firebase-in-react.vercel.app/"
        />
        <Projcard
          description="Leads Tracker Chrome Extension"
          img={leads}
          duration="A powerful tool designed to revolutionize lead management and streamline sales workflows.With its intuitive interface and robust features, this extension empowers users to efficiently capture, categorize, and track leads from various online sources.. "
          gitlink="https://github.com/Kritika-Jain-kj/Lead-Tracker-Chrome-Extension"
          live="https://kritika-jain-kj.github.io/Lead-Tracker-Chrome-Extension/"
        />
        <Projcard
          description="E- Commerce Website"
          img={shopping}
          duration="A web application for selling products where user can add items to cart and also read fashion blogs. "
          gitlink="https://github.com/Kritika-Jain-kj/E--commerce-website"
          live="https://kritika-jain-kj.github.io/E--commerce-website/"
        />
        <Projcard
          description="SereneSonics"
          img={music}
          duration="A sleek and user-friendly music player website, thoughtfully designed using HTML, CSS and javascript. "
          gitlink="https://github.com/Kritika-Jain-kj/song-playing-website"
          live="https://kritika-jain-kj.github.io/song-playing-website/"
        />
        <Projcard
          description="Rock-Paper-Scissor"
          img={game}
          duration="A childhood game of rock, paper and scissor played again computer, created using HTML,CSS and Javascript."
          gitlink="https://github.com/Kritika-Jain-kj/Stone-Paper-Scissor"
          live="https://kritika-jain-kj.github.io/Stone-Paper-Scissor/"
        />
      </div>
    </div>
  )
}

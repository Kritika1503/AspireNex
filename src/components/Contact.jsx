import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
export default function Contact() {
  const toastnotification = () => {
    toast('Message Sent!')
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_l6c9dfa',
        'template_fzooeco',
        form.current,
        'H7iNMRf1dmBd1Dp7o'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact">
      <h2 className="heading2">Mail me at </h2>
      <h2 className="mailid heading3">@kritikajain1503@gmail.com</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input1" type="text" name="user_name" />
        <label>Email</label>
        <input className="input1" type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input
          onClick={toastnotification}
          className="button"
          type="submit"
          value="Send"
        />
        <ToastContainer />
      </form>
    </div>
  )
}

import React from 'react'
import 'aos/dist/aos.css'
export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="name">@{date} Kritika Jain</p>
    </div>
  )
}

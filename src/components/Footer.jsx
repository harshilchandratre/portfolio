import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer-main'>
        <div className='Footer-top'>
            <h1>Let's have a chat.</h1>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>+91 8849951360</li>
                    <li>harshilchandratre2002@gmail.com</li>
                </ul>
            </div>
        </div>
        
        <div className='Footer-bottom'>
            <ul>
                <li><Link>Contact</Link></li>
                <li><Link>LinkedIn</Link></li>
                <li><Link>Instagram</Link></li>
                <li><Link>Resume</Link></li>
            </ul>
        </div>
    </div>
        <div className='Footer-cc'><h6>copywrite 2026 Copywrite. Made with 🤍 by harshilchandratre github</h6></div>
    </>
  )
}

export default Footer
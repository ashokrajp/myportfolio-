import React from 'react'
import './footer.css'
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>ALEX</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    <div className="footer__socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://linkedlin.com"><BsLinkedin/></a>

    </div>
    <div className="footer__copyright">
      <small>&copy;alexander . All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer
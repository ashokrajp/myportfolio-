import React from 'react'
import './header.css'
import CTA from'./CTA'
import  me from '../../assets/bga.png'
import Headersocials  from './Headersocials'
const Header = () => {
  return (
    <header>
     <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Ashok Raj</h1>
      <h5 className="text-light">Fullstack Devloper</h5>
      
      <CTA/>
      <Headersocials/>
      <div className="me">
        <img src={me} alt="me" />
      </div>

      <a href='#contact'className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header

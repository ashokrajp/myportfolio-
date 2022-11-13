import React from 'react'
import './nav.css'
import {AiOutlineHome}from'react-icons/ai'
import {AiOutlineUser}from'react-icons/ai'
import {BiBookAlt}from'react-icons/bi'
import {RiServiceLine}from'react-icons/ri'
import {RiMessage3Fill}from'react-icons/ri'
import { useState } from 'react'
const Nav = () => {
  const[activeNav,setActiveNav]= useState('');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav=== '#'? 'actice':''}><AiOutlineHome/></a>
      <a href="#about"onClick={()=>setActiveNav('#about')} className={activeNav=== '#about'? 'actice':''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience'? 'actice':''}><BiBookAlt/></a>
      <a href="#services"onClick={()=>setActiveNav('#services')} className={activeNav=== '#services'? 'actice':''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav=== 'contact'? 'actice':''}><RiMessage3Fill/></a>
    </nav>
  )
}

export default Nav
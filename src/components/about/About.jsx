import React from 'react'
import './about.css'
import ME from'../../assets/my.jpeg'
import{FaAward} from'react-icons/fa'
import{FiUsers} from'react-icons/fi'
import{VscFolderLibrary} from'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
    <h5>Get TO Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME}alt="About Image"/>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>client</h5>
            <small>Fresher</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>project</h5>
            <small>5 complete</small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, doloribus. Optio, suscipit molestiae! Est tempora ut iure, minima ullam, placeat ex nulla accusantium magnam earum similique et libero accusamus aliquid.</p>
         <a href="#contact"className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about

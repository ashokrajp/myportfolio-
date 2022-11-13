import React from 'react'
import CV from '../../assets/resume up.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV}dawnload className='btn'>Dawnload CV</a>
        <a href="#contact"className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA
import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing Tommorows Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, ratione quasi voluptatibus 
                suscipit porro minima vitae reiciendis quia, ea ipsam totam voluptatem, accusantium odit impedit fugit. 
                Maiores, delectus vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, ratione quasi voluptatibus 
                suscipit porro minima vitae reiciendis quia, ea ipsam totam voluptatem, accusantium odit impedit fugit. 
                Maiores, delectus vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, ratione quasi voluptatibus 
                suscipit porro minima vitae reiciendis quia, ea ipsam totam voluptatem, accusantium odit impedit fugit. 
                Maiores, delectus vero.</p>
            
        </div>
    </div>
  )
}

export default About
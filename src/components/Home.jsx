import React from 'react'
import './home.css'
import sendy from './send-message.png'
import twitter from './twitter.png'
import whatsapp from './whatsapp.png'
import github from './github-logo.png'
import mouse from './mouse.png'
import arrow from './down-arrow.png'


const Home = () => {
  return (
    <>
       <div className='cover'>
         <div className="card1">
           <div className="links">
              <img src={twitter} alt="twitter" />
              <img src={whatsapp} alt="whatsapp" />
              <img src={github} alt="github" />
           </div>
           
           <div className="description">
           <div className="phoneholder">
             <div className="rosebrown"></div>
           </div>
             <h3>William Achuchi</h3>
             <h4>Web Developer</h4>
             <p>I'm a Web Developer based in Nairobi, Kenya. I'm enthusiasthic <br/> with Computing technology specifically writting code </p>
             <button className='hello'>Say Hello <img className='send' src={sendy} alt = "send" /></button>
             <div className='scroll_holder'>
               <img src={mouse} alt="mouse" className='scroll' /> <h6>Scroll Down</h6> <img src={arrow} alt="arrow" className='scrolly' />
             </div>
           </div>
            <div className="holder">
                <div className="blue"></div>
            </div>
         </div>
       </div>
    </>
    
  )
}

export default Home
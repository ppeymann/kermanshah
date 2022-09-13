import React from 'react'
import "./heroStyle.css"
import video from "../../Assets/Video_9998daae-fd87-4f38-89c2-133feafdc00a.mp4"
import {AiOutlineSearch} from "react-icons/ai"
const Hero = () => {
  return (
    <div className='hero' >
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1> تجربه ای عالی در کرمانشاه</h1>
        <h2>شهری با هزاران سال قدمت</h2>
        <form className='form'>
          <div>          
            <input type="text" placeholder='سرچ کن!' />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
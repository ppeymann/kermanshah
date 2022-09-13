import React from 'react'
import './desti.css'
import firstI from "../../Assets/bisetoon.jpg";
import secondI from "../../Assets/bolvar.jpg"
import thirdI from "../../Assets/sarab.jpg"
import fourdI from "../../Assets/tekye.jpg"
import fiftedI from "../../Assets/piran.jpg"


const Desti = () => {
  return (
    <div className='desti' >
        <div className='container'>
            <h1>تفریحگاه ها</h1>
            <p>آثار باستانی و مناظر زیبا</p>
            <div className='image-container'>
                <img className='span-3 image-grid-row-2' src={firstI} alt="first" />
                <img src={secondI} alt="first" />
                <img src={thirdI} alt="first" />
                <img src={fourdI} alt="first" />
                <img src={fiftedI} alt="first" />
            </div>
        </div>
    </div>
  )
}

export default Desti 
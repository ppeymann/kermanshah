import React from 'react'
import "./selectsStyle.css"

// image imports

import one from "../../Assets/Taqbostan.jpg";
import two from "../../Assets/tekye.jpg";
import three from "../../Assets/sarabSahneh.jpg";
import four from "../../Assets/ghar.jpg";
import five from "../../Assets/piran.jpg";
import six from "../../Assets/parrao.jpg"
import SelectImg from '../selectImg/SelectImg';

const Selects = () => {
  return (
    <div name="select" className='selects' >
        <div className='container'>
        <SelectImg bgImg={one} text="طاقبستان" />
        <SelectImg bgImg={two} text="تکیه معاون الملک" />
        <SelectImg bgImg={three} text="سراب صحنه" />
        <SelectImg bgImg={four} text="غار قوری قله" />
        <SelectImg bgImg={five} text="سراب پیران" />
        <SelectImg bgImg={six} text="غار پروآ" />
        </div>

    </div>
  )
}

export default Selects
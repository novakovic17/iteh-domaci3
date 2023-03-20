import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/back.png'
import {RiShoppingBagFill} from 'react-icons/ri'


function Hero() {
  return (
    <div className={css.container}>

    {/*leftside*/}
    <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
    
    <div className={css.text2}>
        <span>Trendy Collection</span>
        <span>
            {" "}
            Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
    </div>
    </div>

    {/*middle side hero image */}
    <div className={css.wrapper}>
        <div className={css.circle}>
            <img src={HeroImg} alt="" width ={400} />
            <div className={css.cart2}>
                <RiShoppingBagFill/>
            </div>
        </div>
    </div>

    {/*right side */}
    <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Custumers</span>
        </div>
    </div>




    </div>

    )
}

export default Hero
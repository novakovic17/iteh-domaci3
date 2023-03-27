import React from 'react';
import css from './Footer.module.css';
import{InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline";


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            
    <div className={css.block}>
        <div className={css.detail}>
            <span>Contact us</span>
            <span className ={css.pngLine}>
            <LocationMarkerIcon className = {css.icon}/>
            <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={css.pngLine}>
            <PhoneIcon className = {css.icon}/>
            <a href="tel:352-306-4415">352-306-4415</a>
            </span>
        </div>
    </div>

    <div className={css.block}>
        <div className={css.detail}>
            <span>Company</span>
            <span className = {css.pngLine}>
            <UsersIcon className = {css.icon}/>
            <span>About us</span>
            </span>
        </div>
    </div>

    <div className={css.block}>
        <div className={css.detail}>
            <span>Resources</span>
            <span className = {css.pngLine}>
            <LinkIcon className = {css.icon}/>
            <span>Safety Privacy & Terms</span>
            </span>
        </div>
    </div>

        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import BackgroundImage from "../../assets/page1_bg.png"
import styles from './Banner.module.css'

function Banner() {
  return (
    <div>
        <div className = {styles.bottom}>
            <p>Discover new things on SuperApp</p>
        </div>
        <img src = {BackgroundImage} />
    </div>
  )
}

export default Banner

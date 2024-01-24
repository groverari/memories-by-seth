import { useState } from 'react'
import wide from '../../assets/couple_pics/IMG_0864.jpg'
import tall from '../../assets/couple_pics/IMG_0804.jpg'
import './home.styles.scss'
import title from '../../components/title_card/title.component'

function Landing() {
  console.log(window.matchMedia('(max-width: 600px)'))
  return (
    <div className="home">
      <div className="overlay">
        <div className="title-wrapper">
          <Title />
        </div>
      </div>
    </div>
  )
}

export default Landing

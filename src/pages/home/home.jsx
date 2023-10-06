import { useState } from 'react'
import classNames from 'classnames'
import alien from '../../Assets/alien.jpg'
import './home.styles.scss'

function Home() {
  return (
    <div className="page">
      <div className="pics">
        <img className="headline" src={alien} />
      </div>
      <div className="about glass">
        <h3>
          Welcome to my website! My name is Seth, and I'm a photographer based
          in Puyallup Washington. I specialize in capturing your memories.
        </h3>
        <p>
          Photography has been a passion of mine for as long as I can remember.
          I love being able to freeze moments in time and share them with
          others. Whether I'm exploring a new city or hiking in the mountains, I
          always have my camera by my side. As a photographer, I strive to
          create images that are not only visually stunning, but also evoke
          emotion and tell a story. I believe that every photo should have a
          purpose, whether it's to inspire, educate, or simply bring a smile to
          someone's face. I have a deep admiration for the art of film
          photography. There's something truly special about capturing and
          developing images that can't be replicated with digital technology.
          The process of composing a shot, carefully adjusting the exposure, and
          finally seeing the results on film is incredibly rewarding. I believe
          that film photography adds a unique character and aesthetic that
          digital photos simply can't match.{' '}
        </p>
        <p>
          Thank you for taking the time to visit my website and view my work. If
          you're interested in scheduling a photo session, please don't hesitate
          to contact me. I look forward to hearing from you!
        </p>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { useSpring, animated } from '@react-spring/web'

import './services.scss'

function Services() {
  let services = useSpring({
    from: { y: 350, opacity: 0 },
    to: [{ y: 0, opacity: 1 }],
    config: { duration: '500' }
  })

  return (
    <div className="page">
      <h1 className="page-title glass">Services</h1>
      <div className="services-container">
        <animated.div className="service" style={{ ...services }}>
          <h2>Black + White</h2>
          <p>1 hour experience 75-95 exposures $135*</p>
        </animated.div>
        <animated.div className="service" style={{ ...services }}>
          <h2>Color</h2>
          <p>1 hour experience 75-95 exposures $125*</p>
        </animated.div>
        <animated.div className="service" style={{ ...services }}>
          <h2>Combination</h2>
          <p>1 hour experience 50-65 exposures $115*</p>
        </animated.div>
      </div>
      <div className="services-container">
        <animated.div className="service" style={{ ...services }}>
          <h2>Digital Photoshoot</h2>
          <p>1 hour experience $100*</p>
        </animated.div>
      </div>
      <animated.div className="glass warn" style={{ ...services }}>
        <p>
          Extra film can be added to a shoot at an additional cost. I use Harman
          technology black+white film and Kodak color film. Other film brands
          can be used at your request. There may be additional costs in doing
          so. Please contact me (contact link) if you have any questions.
        </p>

        <p>
          <em>
            * This is a general pricing guide, but the final price will be
            determined after speaking and finalizing the details of the shoot
          </em>
        </p>
      </animated.div>
    </div>
  )
}
export default Services

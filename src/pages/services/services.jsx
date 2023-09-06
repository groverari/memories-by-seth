import React from 'react'

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <div className="services-container">
        <div className="service">
          <h2>Black + White</h2>
          <p>1 hour experience 75-95 exposures $135*</p>
        </div>
        <div>
          <h2>Color</h2>
          <p>1 hour experience 75-95 exposures $125*</p>
        </div>
        <div>
          <h2>Combination</h2>
          <p>1 hour experience 50-65 exposures $115*</p>
        </div>
      </div>
      <p>
        Extra film can be added to a shoot at an additional cost. I use Harman
        technology black+white film and Kodak color film. Other film brands can
        be used at your request. There may be additional costs in doing so.
        Please contact me (contact link) if you have any questions.
      </p>

      <p>
        <em>
          * This is a general pricing guide, but the final price will be
          determined after speaking and finalizing the details of the shoot
        </em>
      </p>
    </div>
  )
}
export default Services

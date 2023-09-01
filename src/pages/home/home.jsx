import { useState } from 'react'
import classNames from 'classnames'
import './home.styles.scss'

function Home() {
  const [isShown, setShown] = useState(true)
  const [isShown1, setShown1] = useState(false)
  const [isShown2, setShown2] = useState(false)
  const [isShown3, setShown3] = useState(false)
  const [isShown4, setShown4] = useState(false)

  return (
    <div className="options">
      <div
        className={classNames('option', { active: isShown })}
        onMouseEnter={() => {
          setShown(true)
        }}
        onMouseLeave={() => {
          setShown(false)
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className="fas fa-walking"></i>
          </div>
          <div className="info">
            <div className="main">Blonkisoaz</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div>
      </div>
      <div
        className={classNames('option', { active: isShown1 })}
        onMouseEnter={() => {
          setShown1(true)
        }}
        onMouseLeave={() => {
          setShown1(false)
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className="fas fa-snowflake"></i>
          </div>
          <div className="info">
            <div className="main">Oretemauw</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div>
      </div>
      <div
        className={classNames('option', { active: isShown2 })}
        onMouseEnter={() => {
          setShown2(true)
        }}
        onMouseLeave={() => {
          setShown2(false)
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className="fas fa-tree"></i>
          </div>
          <div className="info">
            <div className="main">Iteresuselle</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div>
      </div>
      <div
        className={classNames('option', { active: isShown3 })}
        onMouseEnter={() => {
          setShown3(true)
        }}
        onMouseLeave={() => {
          setShown3(false)
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className="fas fa-tint"></i>
          </div>
          <div className="info">
            <div className="main">Idiefe</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div>
      </div>
      <div
        className={classNames('option', { active: isShown4 })}
        onMouseEnter={() => {
          setShown4(true)
        }}
        onMouseLeave={() => {
          setShown4(false)
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon">
            <i className="fas fa-sun"></i>
          </div>
          <div className="info">
            <div className="main">Inatethi</div>
            <div className="sub">Omuke trughte a otufta</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

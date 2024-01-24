import './title.styles.scss'
import { Link } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

function Title() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 3000,
      animationSpeed: 9
    }),
    []
  )
  return (
    <animated.div className="title" style={props}>
      <div className="textCont">
        <h1>Ariesh</h1>
        <h1>&</h1>
        <h1>Ishita</h1>
      </div>
      <div className="enterBtn">
        <Link to="/home">
          <h1>Welcome to our Wedding</h1>
        </Link>
      </div>
    </animated.div>
  )
}

export default Title

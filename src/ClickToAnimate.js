import React from 'react'
import { useSpring, animated } from "react-spring";

import './ClickToAnimate.css'

export default function ClickToAnimate() {

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const handleClick = () => {
    console.log('click')
    api.start({ x: 100, y: 100 })
  }

  return (
    <div className="ClickToAnimate">
      <animated.div className="ClickToAnimate__div" style={{ x, y }} />
      <button onClick={handleClick}>Animate!</button>
    </div>
  )
}

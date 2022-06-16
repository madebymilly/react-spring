import React from 'react'
import { useSpring, animated } from "react-spring";

import './ClickToAnimate.css'

export default function ClickToAnimate() {

  //const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 })) // same as:
  const [props, api] = useSpring(() => ({ x: 0, y: 0, skew: 0, backgroundColor: 'blueviolet' }))
  // is a shortcut for this ...
  //const [props, api] = useSpring(() => ({ to: { x: 0, y: 0, skew: 0, backgroundColor: 'blueviolet' } }))

  const [props2, api2] = useSpring(() => ({ x: 0, y: 0, skew: 0, backgroundColor: 'lightgreen' }))

  const handleClick = () => {
    // api.start({ x: 100, y: 100, skew: 10, backgroundColor: 'red' })
    // is a shortcut for this ...
    // api.start({ to: { x: 100, y: 100, skew: 10, backgroundColor: 'red' } })

    // Chained:
    api.start({ to: async (next, cancel) => {
      await next({ x: 100, y: 100 })
      await next({ backgroundColor: 'red' })
      await next({ skew: 10 })
    }})

    api2.start({ to: { x: 100, y: 100, skew: -10, backgroundColor: 'blueviolet' } })
  }

  return (
    <div className="ClickToAnimate">
      <animated.div className="ClickToAnimate__div" style={props} />
      <animated.div className="ClickToAnimate__div" style={props2} />
      <button onClick={handleClick}>Animate!</button>
    </div>
  )
}

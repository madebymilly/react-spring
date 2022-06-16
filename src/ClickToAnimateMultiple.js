import React from 'react'
import { useSprings, useSpring, animated } from "react-spring";

import './ClickToAnimateMultiple.css'

const cards = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

export default function ClickToAnimateMultiple() {

  const [currentTopCard, setCurrentTopCard] = React.useState(cards.length - 1)

  const [springs, api] = useSprings(cards.length, index => ({ x: 0, y: 0, skew: 0, backgroundColor: 'lightgreen' }))
  //const [props, api2] = useSpring(() => ({ x: 0, y: 0, skew: 0, backgroundColor: 'lightgreen' }))

  const handleClick = () => {
    api.start(index => ({ x: 50, y: 50, skew: 20, backgroundColor: 'purple', delay: index * 200 }))
    // api.start(index => ({ to: async (next, cancel) => {
    //   await next({ x: 100, y: 100, delay: index * 200 })
    //   await next({ backgroundColor: 'purple', delay: index * 200 })
    //   await next({ skew: 10, delay: index * 200 })
    // }}))
  }

  const handleClickTopCard = (i) => {
    //api.start((index) => ({ x: -50, y: -50, skew: -20, backgroundColor: 'pink' }))
    api.start((index) => {
      if (index !== i) return
      setCurrentTopCard(index - 1)
      return { x: -50, y: -50, skew: -20, backgroundColor: 'pink' }
    })
  }

  return (
    <div className="ClickToAnimateMultiple">
      <div className="ClickToAnimateMultiple__divs">
        {springs.map((styles, i) => (
          <animated.div key={i} className="ClickToAnimateMultiple__div" style={styles} />
        ))}
      </div>
      <button onClick={handleClick}>Animate!</button>
      <button onClick={() => handleClickTopCard(currentTopCard)}>Animate div on top</button>
    </div>
  )
}

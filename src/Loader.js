import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure } from 'react-use'
import './Loader.css';

export default function Loader() {
  const [active, toggleActive] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({
    width: active ? width : 0,
    backgroundColor: active ? 'hotpink' : 'turquoise',
    config: { duration: 3000 }
  });
  
  return (
    <div ref={ref} className="Loader" onClick={() => toggleActive(!active)}>
      <animated.div className="Loader__fill" style={props}></animated.div>
      <animated.div className="Loader__content">{props.width.to(x => Math.floor(x * 100 / width))}</animated.div>
    </div>
  )
}

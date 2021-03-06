import React from 'react'
import { useSpring, animated } from 'react-spring'

import './Physics.css';

export default function Physics() {

  // create animation with useSpring and callback function:
  const [props] = useSpring(
    () => ({ width: 100, from: { width: 0}, config: {duration: 3000} })
    //() => ({ width: 100, from: { width: 0} })
  );

  return (
    <>
      <div className="Physics">
        <div className="Physics__A">A</div>
        <animated.div 
          className="Physics__divider"
          style={{width: props.width.to(w => `${w}%`)}}
        ></animated.div>
        <div className="Physics__B">B</div>
        <button>STOP</button>
      </div>
      
    </>    
  )
}

import React, { useEffect } from 'react'
import { useSprings, animated } from "react-spring"

import './AnimatedBackground.css'

export default function AnimatedBackground({ active } ) {
  const [springs, springsApi] = useSprings(5, () => ({
    x: "0%",
    config: {
      duration: 500
    }
  }));

  useEffect(() => {
    if (active) {
      springsApi.set({ x: "0%" });
      springsApi.start((i) => {
        const props = [
          { x: "0%", delay: 0 },
          { x: "100%", delay: 400 },
          { x: "100%", delay: 250 },
          { x: "100%", delay: 100 },
          { x: "100%", delay: 0 }
        ];

        return props[i];
      });
    } else {
      springsApi.start((i) => ({ delay: 0, x: "100%" }));
    }
  }, [active, springsApi]);

  return (
    <animated.div 
      className="AnimatedBackground"
      style={{
        "--x1": springs[0].x,
        "--x2": springs[1].x,
        "--x3": springs[2].x,
        "--x4": springs[3].x,
        "--x5": springs[4].x
      }}  
    />
  )
}

import React, { useState } from 'react'
import AnimatedBackground from './AnimatedBackground';

import './HoverEffect.css'

const image = 'https://picsum.photos/seed/asdfg-draggable-handle-challenge-1/600/400'

export default function HoverEffect() {

  const [hoverState, setHoverState] = useState(false);

  return (
    <div 
      className="HoverEffect"
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      <AnimatedBackground active={hoverState} />
      <img src={image} alt="Mountain" />
    </div>
  )
}

import React, { useState } from 'react'
import { useInterval } from 'react-use'
import { useTransition, animated } from 'react-spring'

import './Slider.css'

const slides = [
  {
    id: 0,
    url: 'https://picsum.photos/id/1000/600/400'
  },
  {
    id: 1,
    url: 'https://picsum.photos/id/999/600/400'
  },
  {
    id: 2,
    url: 'https://picsum.photos/id/400/600/400'
  },
  {
    id: 3,
    url: 'https://picsum.photos/id/2/600/400'
  },
  {
    id: 4,
    url: 'https://picsum.photos/id/616/600/400'
  }
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const item = slides[index];
  const increment = () => setIndex(state => (state + 1) % slides.length);
  useInterval(increment, 2000);

  const transitions = useTransition( //(activeSlide, unique key for each slide, config)
    slides[index],
    {
      // keys: item => item.id,
      key: item.id,
      from: { opacity: 0, transform: 'scale(1.1)'}, 
      enter: { opacity: 1, transform: 'scale(1)'}, 
      leave: { opacity: 0, transform: 'scale(0.9)'}
    }
  );

  return (
    <div className="Slider">
      {transitions((props, item) => (
        <animated.div className="Slider__item" key={props.key} style={{backgroundImage: `url(${item.url})`, ...props}}></animated.div>
      ))}
    </div>
  )
}

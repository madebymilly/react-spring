import React, { useState } from 'react'
import { useInterval } from 'react-use';

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
  return (
    <div className="Slider" key={index} style={{backgroundImage: `url(${item.url})`}}></div>
  )
}

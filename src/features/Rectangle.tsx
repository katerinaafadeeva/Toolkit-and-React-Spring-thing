import React, { useState } from 'react';
import './rectangle.css';
import { Rectangle } from './types/Rectangle';
import { useSpring, animated } from 'react-spring';

function Rectangl({ item }: { item: Rectangle }): JSX.Element {
  const [flipped, set] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  });

  return (
    <div onClick={() => set(!flipped)} className="boxes on">
      <animated.div
        style={{
          backgroundColor: item.color,
          transform,
        }}
        className="one rectangle"
      ></animated.div>
      <animated.div
        style={{
          backgroundColor: item.color,
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
        className="one rectangle2"
      >
        ля ля ля
      </animated.div>
    </div>
  );
}

export default Rectangl;

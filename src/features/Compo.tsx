import React from 'react';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import '../features/styles/compo.css';
import Single from './Single';

function Compo(): JSX.Element {
  const [items, setItems] = useState([]); // rectangles?

  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item: any) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay }),
        await next({ x: 0 });
    },
    leave: (item: any) => async (next) =>
      await next({ x: 100, y: 800, opacity: 0, delay: item.delay }),
  });

  const changeFn = (): void => {
    setItems((v): any =>
      v.length
        ? []
        : [
            { y: -100, delay: 200 },
            { y: -50, delay: 400 },
            { y: 0, delay: 800 },
          ]
    );
  };

  return (
    <div className="compo">
      <div className="application">
        <button className="button" onClick={changeFn}>
          {items ? 'кнопка' : 'slisk'}
        </button>
        <div className="container">
          {transition((style, item) =>
            item ? <animated.div style={style}>{<Single />}</animated.div> : ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Compo;

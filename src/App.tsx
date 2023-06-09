import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Rectangle from './features/Rectangle';
import './app.css';
import { RootState, useAppDispatch } from './store';
import { addRectangle, removeRectangle } from './features/rectangleSlice';
import { animated, useTransition } from 'react-spring';
import Compo from './features/Compo';

export type Rectangle = {
  id: number;
  color: string;
};

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  function getRandomColor(): string {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const { rectangles } = useSelector(
    (store: RootState) => store.rectangleState
  );

  const handleAdd = () => {
    const color = getRandomColor();
    dispatch(addRectangle({ color }));
  };

  const handleDelete = () => {
    dispatch(removeRectangle());
  };

  // transitions :

  const transitions = useTransition<
    Rectangle,
    { opacity: number; transform: string }
  >(rectangles, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });
  return (
    <>
      <div className="main">
        <div className="buttons">
          <button onClick={handleAdd} className="btn">
            добавить квадрат
          </button>
          <button onClick={handleDelete} className="btn">
            отбавить квадрат
          </button>
        </div>
        <div className="list" style={{ display: 'flex', alignItems: 'center' }}>
          {transitions((style, item) => (
            <animated.div
              key={item.id}
              style={{
                ...style,
                paddingBottom: '40px',
              }}
            >
              <Rectangle key={item.id} item={item} />
            </animated.div>
          ))}
        </div>
      </div>
      <Compo />
    </>
  );
}

export default App;

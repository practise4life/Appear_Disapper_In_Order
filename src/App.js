import React, { useState, useEffect } from 'react';
import Square from './Square';
import './style.css';

function App() {
  const [squareClicked, setSquareClicked] = useState([]);

  useEffect(() => {
    function removeLast(currentArray) {
      if (currentArray.length === 0) {
        return;
      }
      const newArray = [...currentArray];
      newArray.pop();
      setSquareClicked(newArray);
      setTimeout(() => {
        removeLast(newArray);
      }, 300);
    }

    if (squareClicked.length === 6) {
      setTimeout(() => {
        removeLast(squareClicked);
      }, 300);
    }
  }, [squareClicked]);

  function onClickSquare(index) {
    if (squareClicked.includes(index)) {
      return;
    }
    setSquareClicked(squareClicked.concat(index));
  }

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(6)].map((_, index) => {
        return (
          <Square
            key={index}
            backgroundColor={
              squareClicked.includes(index) ? 'green' : 'transparent'
            }
            onClickSquare={() => onClickSquare(index)}
          />
        );
      })}
    </div>
  );
}

export default App;

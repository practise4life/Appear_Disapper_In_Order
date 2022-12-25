import React from 'react';

const Square = ({ backgroundColor, onClickSquare }) => {
  function onClickButton() {
    onClickSquare();
  }
  return (
    <div
      style={{
        border: '1px solid black',
        width: '50px',
        height: '50px',
        backgroundColor,
      }}
      onClick={onClickButton}
    ></div>
  );
};

export default Square;

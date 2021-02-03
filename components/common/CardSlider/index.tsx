import React, { useRef } from 'react';
import StyledCardSlider from './style';

function CardSlider({ children }) {
  const SliderRef = useRef(null);

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(SliderRef.current.scrollLeft); // 현재 스크롤의 왼쪽 좌표를 얻음. scrollRight는 없음
    SliderRef.current.scrollLeft -= 300;
  };
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    SliderRef.current.scrollLeft += 300;
  };

  return (
    <StyledCardSlider ref={SliderRef}>
      <button className="left-button" onClick={handleLeftClick}>
        <i className="fas fa-chevron-left"></i>
      </button>
      {children}
      <button className="right-button" onClick={handleRightClick}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </StyledCardSlider>
  );
}

export default CardSlider;

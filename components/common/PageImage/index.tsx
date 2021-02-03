import React from 'react';
import styled from 'styled-components';

const StyledPageImage = styled.div`
  position: relative;
  width: 100%;
  height: 450px;

  .pageImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .innerText {
    position: absolute;
    top: 50%;

    width: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 55px;
    text-transform: uppercase;
  }
`;

function PageImage({ imgSrc = '', text = 'text가 없습니다' }) {
  return (
    <StyledPageImage className="pageImage-section">
      <img className="pageImage" src={`${imgSrc}`} />
      <div className="innerText">{text}</div>
    </StyledPageImage>
  );
}

export default PageImage;

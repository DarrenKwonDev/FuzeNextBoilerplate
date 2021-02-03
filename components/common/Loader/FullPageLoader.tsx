import React from 'react';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: white;
  z-index: 1000000;
  color: white;
  /* 여기까지가 전체 page 관련 설정들 이하 loader들 */

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  svg {
    /* svg viewBox 초기값은 300 * 150. width, width, height는 viewBox에 영향을 못 줌. 단지 보이는 부분을 제한할 뿐. */

    circle {
      transform-origin: 50% 50%;
      animation: loader 2.5s infinite ease-in-out;

      &:nth-child(1) {
        stroke: #ffc114;
        stroke-dasharray: 50;
        stroke-linecap: round;
        animation-delay: 0.25s;
      }
      &:nth-child(2) {
        stroke: #ff5248;
        stroke-dasharray: 100;
        stroke-dashoffset: -30;
        stroke-linecap: round;
        animation-delay: 0.125s;
      }
      &:nth-child(3) {
        stroke: #19cdca;
        stroke-dasharray: 150;
        stroke-dashoffset: -300;
        stroke-linecap: round;
        animation-delay: 0.075s;
      }
      &:nth-child(4) {
        stroke: #4e80e1;
        stroke-dasharray: 350;
        stroke-dashoffset: -100; // stoke 자체를 옮김
        stroke-linecap: round;
        animation-delay: 0.025s;
      }
    }
  }
`;

interface IFullPageLoaderProps {
  isLoading: boolean;
}

function FullPageLoader({ isLoading }: IFullPageLoaderProps) {
  return (
    <>
      {isLoading ? (
        <LoadingScreen>
          <svg className="page-loader" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="red" strokeWidth="6px">
              <circle cx="150" cy="75" r="10" />
              <circle cx="150" cy="75" r="20" />
              <circle cx="150" cy="75" r="30" />
              <circle cx="150" cy="75" r="40" />
            </g>
          </svg>
        </LoadingScreen>
      ) : (
          ''
        )}
    </>
  );
}

export default FullPageLoader;

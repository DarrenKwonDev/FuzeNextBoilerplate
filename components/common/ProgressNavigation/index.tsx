import React from 'react';
import styled, { keyframes } from 'styled-components';

const progressMove = keyframes`
  from {
  }

  to {
    transform: translateX(100%);
  };
`;

const S = {
  Wrapper: styled.div<{ timeInSec: number }>`
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;

    .progress-percentage {
      position: absolute;
      right: 100%;

      width: 100%;
      height: 2px;

      background: white;
      animation: ${progressMove} ${(props) => props.timeInSec}s linear infinite;
    }
  `,
};

function ProgressNavigation({ timeInSec }: { timeInSec: number }) {
  return (
    <S.Wrapper timeInSec={timeInSec}>
      <div className="progress-percentage"></div>
    </S.Wrapper>
  );
}

export default ProgressNavigation;

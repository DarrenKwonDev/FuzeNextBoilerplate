import React from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

interface IErrorProps {
  statusCode: number;
}

function _error({ statusCode }: IErrorProps) {
  return (
    <S.Wrapper>
      <img src={`https://http.cat/${statusCode}.jpg`} alt="error page" />
    </S.Wrapper>
  );
}

export default _error;

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

function NotFound() {
  return (
    <S.Wrapper>
      <img src={'https://http.cat/404.jpg'} alt="404 error" />
    </S.Wrapper>
  );
}

export default NotFound;

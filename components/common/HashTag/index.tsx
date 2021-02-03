import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const S = {
  Wrapper: styled.button<{ selected: boolean }>`
    padding: ${(props) => props.theme.paddings.base};
    margin-right: ${(props) => props.theme.margins.small};

    border: 1px solid ${({ selected, theme }) => (selected ? theme.colors.mainColor : theme.colors.grayThree)};
    background: ${({ selected, theme }) => (selected ? theme.colors.mainColor : theme.colors.grayOne)};
    color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.grayThree)};
    font-size: ${(props) => props.theme.fontSizes.small};

    border-radius: 35px;
    outline: none; // 클릭해도 외곽선 안보이게
    cursor: pointer;
  `,
};

function HashTag({ text = '', defaultClicked = false, clickable = true, whereTo = text }) {
  const [Selected, setSelected] = useState<boolean>(defaultClicked);

  const rotuer = useRouter();

  const handleClick = useCallback(() => {
    if (!clickable) {
      return;
    }
    setSelected(!Selected);
    // clickable을 false로 해놓아도 이동은 시켜야 하나?
    rotuer.push(`/search?keyword=${whereTo}`);
  }, [Selected]);

  return (
    <S.Wrapper selected={Selected} onClick={handleClick}>
      <h4># {text}</h4>
    </S.Wrapper>
  );
}

export default HashTag;

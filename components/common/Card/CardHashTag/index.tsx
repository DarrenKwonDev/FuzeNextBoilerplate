import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledCardHashingTag = styled.div`
  padding: ${(props) => props.theme.paddings.base};
  border-radius: 24px;
  background: ${(props) => props.theme.colors.mainColor};
  color: white;
  /* cursor: pointer; */

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.margins.base};
  }
`;

// 강의에 달린거니 /course/topik 으로 옮겨야 하나, search의 결과물로 이동시켜야 하나
function CardHashTag({ text = '' }) {
  return (
    <StyledCardHashingTag>
      <p># {text}</p>
    </StyledCardHashingTag>
  );
}

export default CardHashTag;

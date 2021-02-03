import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  margin: 0 0 ${(props) => props.theme.margins.global} 0;
  font-weight: 900;
`;

function SectionTitle({ title = '타이틀이 없습니다' }) {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
}

export default SectionTitle;

import React from 'react';
import styled from 'styled-components';

const StyledFancySubmitButton = styled.div`
  button[type='submit'],
  input[type='submit'] {
    background: white;
    color: ${(props) => props.theme.colors.pointColorBlue};
    text-transform: uppercase;
    border: 1px solid ${(props) => props.theme.colors.pointColorBlue};
    margin-top: ${(props) => props.theme.margins.xxl};
    padding: ${(props) => props.theme.paddings.xl};
    font-size: 16px;
    letter-spacing: 5px;
    border-radius: 6px;
    cursor: pointer;
  }

  // hover시
  button[type='submit']:hover,
  input[type='submit']:hover {
    background: ${(props) => props.theme.colors.pointColorBlue};
    color: white;
    transition: all 0.2s ease;
  }

  input:disabled {
    opacity: 0.4;
  }
`;

function FancySubmitButton({ text = 'submit' }) {
  return (
    <StyledFancySubmitButton>
      <input type="submit" value={text} />
    </StyledFancySubmitButton>
  );
}

export default FancySubmitButton;

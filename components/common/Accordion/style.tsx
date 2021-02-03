import styled from 'styled-components';

const StyledAccordion = styled.div`
  /* 아코디언 헤더 */
  button.accordion {
    width: 100%;
    background-color: ${(props) => props.theme.colors.grayOne};
    border: none;
    outline: none;
    text-align: left;
    padding: 15px 20px;
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
    transition: background-color 0.2s linear;
  }

  /* 아코디언 헤더 hover */
  /* button.accordion.is-open 이 속성을 넣으면 열린 헤더의 스타일링을 할 수 있는데 안 어울려서 없앰 */
  button.accordion:hover {
    background-color: ${(props) => props.theme.colors.grayTwo};
  }

  .accordion-content {
    background-color: white;
    border-left: 1px solid ${(props) => props.theme.colors.grayOne};
    border-right: 1px solid ${(props) => props.theme.colors.grayOne};
    padding: 0 0 0 10px; // 내용물이 살짝 오른쪽으로 들어가도록
    max-height: 0; // 아코디언 처음에는 높이가 0이어야 함
    overflow: hidden; // 아코디언 닫았을 때 내용물이 안 넘치게
    transition: max-height 0.2s ease-in-out;
  }
`;

export const AccordionLecture = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grayOne};
  padding: 20px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.grayOne};
  }

  .preview {
    background-color: ${(props) => props.theme.colors.mainColor};
    padding: ${(props) => props.theme.paddings.xxsmall} ${(props) => props.theme.paddings.xsmall};
    margin-left: ${(props) => props.theme.margins.small};
    border-radius: 6px;
    color: white;
  }
`;

export default StyledAccordion;

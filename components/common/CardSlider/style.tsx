import styled from 'styled-components';

const StyledCardSlider = styled.div`
  display: flex;
  align-items: center;

  /* width: 90vw; */
  /* width: 100%; */
  padding: 20px;
  overflow-x: auto; // 👈 중요
  scroll-behavior: smooth; // 중요. 부드럽게 움직이게 하려고.

  .card-item {
    flex-shrink: 0; // 👈 중요
    margin: 0 10px 0 0; // 각 아이템간의 간격
  }

  /* 스크롤바 속성. 안 보이게 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  button {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
    border: 1px solid ${(props) => props.theme.colors.grayTwo};
    border-radius: 999px;

    width: 50px;
    height: 50px;
    padding: ${(props) => props.theme.paddings.base};
    background: transparent;
    cursor: pointer;
    background: white;

    i {
      font-size: ${(props) => props.theme.fontSizes.xxxl};
      color: ${(props) => props.theme.colors.black};
    }
  }

  .left-button {
    left: 35px;
  }

  .right-button {
    right: 35px;
  }
`;

export default StyledCardSlider;
